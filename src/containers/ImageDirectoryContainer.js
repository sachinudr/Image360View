import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ImageDirectoryActionCreator from '../actions/ImageDirectoryActionCreator';
import {ImageHeader, ImageAframe, ImageContainer} from '../components/index';

class HSNContainer extends Component {

    constructor(props) {
        super(props);

        this.state={
            headerVisible : false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    componentWillMount() {
      this.props.fetchImages()
    }

    handleClick(){
        console.log('In Click');
        this.setState({headerVisible:true});
    }

    render() {
        let data = this.props.data;
        let currentImageIndex = this.props.currentImage;
        let currentImage = data[currentImageIndex];
        console.log('data',data,currentImageIndex, currentImage)
        /*return(
            <div>
                <ImageHeader {...this.props} images={data} type="thumbnail"/>
                <ImageAframe isLoading={this.props.isLoading} currentImage={currentImage} type="fullsize"/>
            </div>
        )*/
        return(
            <div>
                <div style={{width:window.innerWidth}}><h3 style={{margin:'15 auto'}}> Scapic | 360</h3></div>
                <ImageHeader {...this.props} images={data} type="thumbnail" click={this.handleClick}/>
                {
                    this.state.headerVisible ?  
                    <div style={{width:'80%'}}>
                         <ImageAframe isLoading={this.props.isLoading} currentImage={currentImage} type="fullsize"/>
                    </div>   :  <span>Click Any Image to View 360 degree</span>
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    data: state.ImageDirectoryReducer.data,
    currentImage: state.ImageDirectoryReducer.currentImage,
    isLoading: state.ImageDirectoryReducer.isLoading,
    isFailed: state.ImageDirectoryReducer.isFailed
});


const mapDispatchToProps = dispatch =>
    bindActionCreators(ImageDirectoryActionCreator, dispatch);

HSNContainer.propTypes = {};

HSNContainer.defaultProps = {
    pageName: 'apna-page'
};

export default connect(mapStateToProps, mapDispatchToProps)(HSNContainer);