import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { createProject } from "../store/actions/projects";
import { PeopleState } from "../store/reducers/types";
import { RootState } from "../store/types";
import PersonCard from "./PersonCard";

type Errors = {
  title?: string;
  description?: string;
  people?: string;
};

const CreateProjectForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedPeopleIds, setSelectedPeopleIds] = useState<string[]>([]);
  const [errors, setErrors] = useState<Errors>({});

  const allPeople = useSelector<RootState, PeopleState>(
    (state) => state.people
  );

  const dispatch = useDispatch();

  const handleSubmit = () => {
    const errors: Errors = {};
    if (title.length < 5) {
      errors.title = "Title must be at least 5 characters long.";
    }
    if (description.length < 15) {
      errors.description = "Description must be at least 15 characters long.";
    }
    if (selectedPeopleIds.length === 0) {
      errors.people = "You must select at least one person.";
    }

    if (Object.keys(errors).length > 0) {
      return setErrors(errors);
    } else {
      dispatch(
        createProject({
          title,
          description,
          people: allPeople.filter((p) => selectedPeopleIds.includes(p.id)),
        })
      );
      setTitle("");
      setDescription("");
      setSelectedPeopleIds([]);
    }
  };

  useEffect(() => {
    setErrors({});
  }, [title, description, selectedPeopleIds]);

  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit();
      }}
    >
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          placeholder="Project's title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        {errors.title && (
          <Form.Text className="text-danger">{errors.title}</Form.Text>
        )}
      </Form.Group>
      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Project's description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        {errors.description && (
          <Form.Text className="text-danger">{errors.description}</Form.Text>
        )}
      </Form.Group>
      <Form.Group>
        <Form.Label>People</Form.Label>
        <Form.Control
          as="select"
          value="default"
          onChange={(event) =>
            setSelectedPeopleIds((currSelectedPeopleIds) => [
              ...currSelectedPeopleIds,
              event.target.value,
            ])
          }
        >
          <option value="default" disabled>
            Select a person...
          </option>
          {allPeople
            .filter(
              (person) => !selectedPeopleIds.some((id) => id === person.id)
            )
            .map((unselectedPerson) => (
              <option key={unselectedPerson.id} value={unselectedPerson.id}>
                {unselectedPerson.name}
              </option>
            ))}
        </Form.Control>
        {errors.people && (
          <Form.Text className="text-danger">{errors.people}</Form.Text>
        )}
        {selectedPeopleIds.map((id) => (
          <PersonCard
            key={id}
            data={allPeople.find((p) => p.id === id)!}
            onRemove={(personId) =>
              setSelectedPeopleIds((currSelectedPeopleIds) =>
                currSelectedPeopleIds.filter(
                  (currSelectedId) => currSelectedId !== personId
                )
              )
            }
          />
        ))}
      </Form.Group>
      <Button variant="primary" type="submit" block>
        Create
      </Button>
    </Form>
  );
};

export default CreateProjectForm;
