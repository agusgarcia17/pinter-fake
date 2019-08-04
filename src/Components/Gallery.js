import React, {Component} from 'react';
import { Card, Button,CardColumns, CardImg, CardBody, Alert } from 'reactstrap';
 import auth from '../auth';
 import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

 let client_id = '9711af22a0ecedd55d8ddf87e240f23b415b6b3fcbdf6c25f4e9bf3025d03176'

 class Gallery extends Component {
    state ={
        photos: null,
        // pagina: 1,
    }
    componentDidMount(){
        this.images()
    }
 
 images =() => {
    fetch(`https://api.unsplash.com/photos/?client_id=${client_id}`)
    // fetch(`https://api.unsplash.com/photos/?client_id=${client_id}&page=${this.state.pagina}`)
    .then(res => res.json())
    .then(json => this.setState({photos:json}))
 }

 likeImage = (e, photo) => {
 // console.log(photo);
  if (auth.isAuthenticated()) {
    const requestData = {
      url: photo.urls.small,
      idPhoto:photo.id,
      idUsername: auth.user.uid
    }
    fetch('http://localhost:3001/api/likes', {
      method: 'POST',
      body: JSON.stringify(requestData),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(like => {
      console.log(like);
      if (like === false) {
        alert("Already liked")
      } else {
        alert('Liked')
      }

    })
  } else {
    alert('You have to be logged in');
    this.props.history.push('/login')
  }
}
 
//  nextPage =() => this.setState({pagina: this.state.pagina + 1}, () => this.images())
//  prevPage =() => this.setState({pagina: this.state.pagina - 1}, () => this.images())
 
 
  render(){
   return (
     
    <CardColumns>
      {(this.state.photos !== null ) ?
        (
     this.state.photos.map(tile => (
      <Card key={tile.id}>
        <CardImg top width="100%" src={tile.urls.small} alt={tile.alt_description} />
        {auth.isAuthenticated() ? (
        <CardBody>
          <Button onClick={(e) => this.likeImage(e, tile)}>Like <FontAwesomeIcon icon={faHeart} /></Button>
        </CardBody>
        ): ''}
      </Card>))) : '' }
    </CardColumns>
  );
};
 }

export default Gallery;