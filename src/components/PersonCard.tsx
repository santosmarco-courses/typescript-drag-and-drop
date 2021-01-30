import React, { useState } from "react";
import { Person } from "../types";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaTimesCircle } from "react-icons/fa";

type PersonCardProps = {
  data: Person;
  onRemove: (personId: string) => any;
  className?: string;
};
const PersonCard: React.FC<PersonCardProps> = (props) => {
  const [showRemoveButton, setShowRemoveButton] = useState(false);

  return (
    <div
      className="mt-1 d-flex"
      onMouseEnter={() => setShowRemoveButton(true)}
      onMouseLeave={() => setShowRemoveButton(false)}
    >
      <Card style={{ flex: 1 }}>
        <Card.Body className="p-2 d-flex justify-content-between">
          <strong>{props.data.name}</strong>
          <div>
            {props.data.role}, <em>{props.data.dept}</em>
          </div>
        </Card.Body>
      </Card>
      {showRemoveButton && (
        <Button
          variant="danger"
          className="ml-1 d-flex align-items-center justify-content-center"
          onClick={() => props.onRemove(props.data.id)}
        >
          <FaTimesCircle />
        </Button>
      )}
    </div>
  );
};

export default PersonCard;
