import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import VideoCard from './VideoCard';
import { getAllVideos } from '../services/allAPI';

function View({uploadVideoStatus}) {
  const [allVideo, setAllVideo] = useState([])
  const [deleteVideostatus, setDeleteVideoStatus]= useState(false)

  const getAllVideoFromDB = async () => {
    const response = await getAllVideos();
    const { data } = response;
    console.log(response);
    setAllVideo(data);
  }
  useEffect(() => {
    getAllVideoFromDB();
  }, [uploadVideoStatus,deleteVideostatus])
  return (
    <>
      <Row>{
        allVideo.length > 0 ?
          allVideo.map((video) => (
            <Col sm={12} md={6} lg={4} xl={3}>
              <VideoCard displayVideo = {video}/>
            </Col>
          ))
          :
          <p>Nothing to Display</p>
      }

      </Row>
    </>
  )
}

export default View