import React, {Component} from 'react';
import { Card, Button,CardColumns, CardImg, CardBody, Alert } from 'reactstrap';
import auth from '../auth';

 class Profile extends Component {
  state = {
    likedImages: []
  }

  getImages = () => {
    fetch(`http://localhost:3001/api/likes/${auth.user.uid}`)
      .then(res => res.json())
      .then(images => {
        this.setState({likedImages:[...images.response]}, () => console.log(this.state.likedImages))
      })
  }
  componentDidMount() {
    this.getImages()
    }

  render() {
    return (
      <CardColumns>
      {(this.state.likedImages !== null ) ?
        (
     this.state.likedImages.map(tile => (
      <Card key={tile.id}>
        <CardImg top width="100%" src={tile.url} alt={tile.alt_description} />
        {auth.isAuthenticated() ? (
        <CardBody>
          <Button onClick={this.likeImage}>Like</Button>
        </CardBody>
        ): ''}
      </Card>))) : 'nulo' }
    </CardColumns>
    );
  }
}

export default Profile;