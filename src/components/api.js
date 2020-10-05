import React,{Component} from 'react'

class Api extends Component
{
    state={
        loading:true,
        person:null
    };
    async componentDidMount()
    {
        const url= "https://api.randomuser.me/";
        const response=await fetch(url);
        const data=await response.json();
        console.log(data);
        this.setState({
            person:data.results[0],loading:false
        })

    }
    render()
    {
        if(this.state.loading)
        {
            return <div>.....loading</div>
        }
        return(
            <div>
                <p> {this.state.person.name.title} {this.state.person.name.first}</p>
            </div>
        )
    }
}
export default Api