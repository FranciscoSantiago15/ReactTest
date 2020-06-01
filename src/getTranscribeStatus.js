import React from 'react';
import TranscribeData from './getTranscribeData'




class TranscribeFetch extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            body: '',
            isLoading: true
        };
    }

    async componentDidMount() {
        const url = "https://3xeam2g64j.execute-api.us-east-1.amazonaws.com/transcribe/getstatus";
        const response = await fetch(url)
        const data = await response.json();
        //console.log(data);
        this.setState({ body: data.body })
        console.log(this.state.body);

        if(this.state.body === String('"IN_PROGRESS"')) {
            this.setState({ isLoading: true })
            this.componentDidMount();
        } else {
            this.setState({ isLoading: false })
        }
    }    

    render() {
        return (
            <div>
                {this.state.isLoading ? (
                    <div>
                        Loading...
                    </div>                    
                ) : (
                    <div><TranscribeData /></div>
                )}
            </div>
        )
    }
    
}
    


export default TranscribeFetch;

