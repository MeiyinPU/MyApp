/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Card, Image } from "semantic-ui-react";

const RepoResult = ({ name, owner, description }) => {



  return (
    <Card>
      <Image src={owner.avatar_url} wrapped ui={false}/>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>{owner.login}</Card.Meta>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
    </Card>
  );
};

export default RepoResult;