import contactData from '../data/contacts';

const contacts= [
    {
        firstName: 'sdfsdf',
        lastName: 'dfgdfg',
        phone: 'wefwe',
        email: 'fhgfgh'
    },

    {
        firstName: 'fghf',
        lastName: 'htrt',
        phone: 'eregr',
        email: 'grerg'
    },

    {
        firstName: 'twewr',
        lastName: 'yjyj',
        phone: 'wetrt',
        email: 'htrhwer'
    }
];

constructor(props){
    
    super(props);

    this.state = {
        contacts: contactData
    }

    render(){

        console.log('Contact Data:', this.state.contacts);
        return ( 
        
        )
    }
}


export default [];
export contacts;