import React, { useEffect } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { deleteCategory, getAllCategory, getVideoDetails, updateCategory, uploadAllCategory } from '../services/allAPI';
import Col from 'react-bootstrap/esm/Col';
import VideoCard from './VideoCard';
import Row from 'react-bootstrap/Row';


function Category() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [allCategory, setAllCategory] = useState([])
  const[deleteCategoryStatus,setDeleteCategoryStatus]=useState(false)
  const [category, setCategory] = useState({
    id: "",
    name: "",
    allVideos:[]
  })
  const getCategoryFromDB = async () => {
    const response = await getAllCategory()
    const { data } = response;
    console.log("===== all categories=====")
    console.log(data);
    setAllCategory(data)
  }
  useEffect(() => {
    getCategoryFromDB();
    setDeleteCategoryStatus(false)



  }, [deleteCategoryStatus])
  const uploadCategory = async () => {
    const { id, name } = category;
    if (!id || !name) {
      toast.warning("please fill the form")
    }
    else {
      const response = await uploadAllCategory(category);
      console.log(response);
      if (response.status === 201) {
        toast.success(`${response.data.categoryName}is successfully uploaded`);
        handleClose();
      }
      else {
        toast.error("something went wrong")
      }
    }



  }
  const deleteCategoryItem = async (id) => {
    const response = await deleteCategory(id);
    setDeleteCategoryStatus(true)
  }
  const dragOver=(e)=>{
    e.preventDefault();
console.log("drag Over===");
  
  }
  const videoDrop=async (e,id)=>{
    console.log(`videocard need to be placed in card with${id}`);
    const videoId= e.dataTransfer.getData('videoId')
    console.log(`video with id ${videoId} need to placed in category with id ${id}`);
    const response = await getVideoDetails(videoId);
    const {data}=response
    console.log("video details");
    console.log(data);
    const selectedCategory=allCategory?.find((item)=>item.id==id);
    console.log("selected Category",selectedCategory);
    selectedCategory.allVideos.push(data);
    console.log("===selected category with dragged video details");
    console.log(selectedCategory);
    await updateCategory(id,selectedCategory)
    getCategoryFromDB();
  }
  return (
    <>
      <div>
        <button className='btn btn-warning' onClick={handleShow}> Add New Category</button>
      </div>
      {
        allCategory.length > 0 ?
          allCategory.map((category) => (
            <div className='d-grid ms-3' style={{ width: "300px" }} droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e,category.id)}>

              <div className='m-5 border border-boundary rounded p-3'>
                <div className='d-flex justify-content-between align-items-center'>
                  <h6>{category.name}</h6>
                  <button className='btn btn-warning'> <i class="fa-solid fa-trash" onClick={()=>deleteCategoryItem(category.id)}></i></button>
                </div>
                <Row>
                  <Col sm={12}>
                    {
                      category.allVideos?.length>0?
                      category.allVideos.map(video=>(<VideoCard displayVideo={video}/>))
                      :
                      <p>no item</p>
                
                    }
                  </Col>
                </Row>
              </div>
            </div>
          ))
          :
          <p>nothing to display</p>

      }

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title><i class="fa-solid fa-pencil text-warning me-3"></i>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the following details</p>
          <Form className='border border-secondary p-3'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter category Id" onChange={(e) => setCategory({ ...category, id: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter category name" onChange={(e) => setCategory({ ...category, name: e.target.value })} />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={uploadCategory}>Add</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={2000}></ToastContainer>
    </>
  )
}

export default Category