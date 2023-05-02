import { Card , Col , Row} from "react-bootstrap";
import axios from "axios";
import { useState, useEffect} from "react";
import Events, { EventCardsUser } from "./Events";
import { EventCard } from "./Events";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { Link } from "react-router-dom";


const UserEvents = (props) => {

    const { currentUser } = useContext(AuthContext);

    const [posts,setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            // get the data of the post posted on this page
            const res = await axios.get(`/posts/user/${props.id}`);
            setPosts(res.data);
            console.log(res.data);
          } catch (err) {
            console.log(err);
          }
        };
        fetchData();
    
      }, [props.id]);
      console.log(posts)

      const events = posts?.map(item => (
    <Col key={item.postID}>
      <EventCard title={item.title} description={item.post_text} location={item.location}
        category={item.category} numP={item.nbrParticipants} goalNumP={item.goalNbrParticipants}
        date={item.event_date} media={item.media}  id={item.postID} orgId={item.organizationID}
      />
    </Col>
  ))

  return (
    <>
      <Card
        style={{
          borderRadius: "9px",
        }}
        className=" mb-4 px-2 w-75 "
      >

    <div className="m-1">
       
            <hr />
            <h2 className="text-center fw-bolder fst-italic">{props.title}</h2>
            <hr />

            {
                  currentUser.userID === props.id ?
                  <Link to={"/create_event"}>
                     <button className="btn style-primary-btn w-100 my-5">
                        Create New Event
                    </button>
                  </Link>
                  :
                  <>
                  </>


                }
            <Row xs={1} md={props.width} className="g-4">
                {
                events
                }
            </Row>
    </div>
        
      </Card>
    </>
  );
};

export default UserEvents;