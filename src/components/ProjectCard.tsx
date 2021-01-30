import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import LinesEllipsis from "react-lines-ellipsis";
import { useDispatch } from "react-redux";
import {
  markProjectAsActive,
  markProjectAsFinished,
} from "../store/actions/projects";
import { Project } from "../types";

type ProjectCardProps = {
  data: Project;
};

const ProjectCard = (props: ProjectCardProps) => {
  const [isDragging, setIsDragging] = useState(false);

  const dispatch = useDispatch();

  const peopleCircles =
    props.data.people.length <= 2
      ? props.data.people
      : props.data.people.slice(0, 2);

  const handleDragEnd = (event: any) => {
    setIsDragging(false);
    if (event.pageX > (document.body.clientWidth * 2) / 3) {
      dispatch(markProjectAsFinished(props.data.id));
    } else if (event.pageX > document.body.clientWidth / 3) {
      dispatch(markProjectAsActive(props.data.id));
    }
  };

  return (
    <Card
      className="mb-2"
      style={{ cursor: isDragging ? "grabbing" : "grab" }}
      draggable
      onDragStart={() => setIsDragging(true)}
      onDragEnd={handleDragEnd}
    >
      <Card.Body className="px-3 py-2 d-flex align-items-center justify-content-between">
        <div className="mr-2" style={{ flex: 1 }}>
          <strong className="border-bottom mb-1">{props.data.title}</strong>
          <br />
          <em className="text-muted" style={{ fontSize: "0.9rem" }}>
            <LinesEllipsis
              text={props.data.description}
              maxLine="2"
              ellipsis="..."
              trimRight
              basedOn="letters"
            />
          </em>
        </div>
        {peopleCircles.map((person) => (
          <div
            key={person.id}
            className="rounded-circle text-light d-flex align-items-center justify-content-center ml-1"
            style={{
              height: "32px",
              width: "32px",
              backgroundColor: person.color,
            }}
          >
            <strong>{person.name[0]}</strong>
          </div>
        ))}
        {props.data.people.length > 2 && (
          <em className="ml-2">+{props.data.people.length - 2}</em>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
