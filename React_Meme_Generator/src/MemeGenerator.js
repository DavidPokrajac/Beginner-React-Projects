import React from "react";
import axios from "axios";

class MemeGenerator extends React.Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "https://i.imgflip.com/1bij.jpg",
      allMemeImages: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios
      .get("https://api.imgflip.com/get_memes")
      .then(res => {
        this.setState({
          allMemeImages: res.data.data.memes
        });
      })
      .catch(error => console.log(error));
  }

  handleSubmit(e) {
    e.preventDefault();
    const randomIndex = Math.floor(
      Math.random() * this.state.allMemeImages.length
    );
    const randomMemeImg = this.state.allMemeImages[randomIndex].url;
    this.setState({
      randomImg: randomMemeImg
    });
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="topText"
            value={this.state.topText}
            onChange={this.handleChange}
            placeholder="top text"
          />
          <input
            type="text"
            name="bottomText"
            value={this.state.bottomText}
            onChange={this.handleChange}
            placeholder="bottom text"
          />
          <button onSubmit={this.handleSubmit}>Generate</button>
        </form>
        <div className="Content">
          <p className="Top">{this.state.topText}</p>
          <img src={this.state.randomImg} />
          <p className="Bottom">{this.state.bottomText}</p>
        </div>
      </React.Fragment>
    );
  }
}

export default MemeGenerator;
