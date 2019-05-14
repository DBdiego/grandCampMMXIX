import React, {Component} from 'react';


class UserInputRecruitment extends Component {
    constructor(props) { 
        super(props);
    
        this.FromDateChange = this.FromDateChange.bind(this);
        this.ToDateChange   = this.ToDateChange.bind(this);
    };


    //Change of From-date
    FromDateChange (event){
        //console.log(event.target.value);
        let newFromDateValue = event.target.value;
        if (newFromDateValue === ''){
            newFromDateValue = this.props.dates[0];
        };
        let ChangedFromDate = new Date(newFromDateValue);
        let ChangedToDate   = new Date(this.props.dates[1]);


        //Adapt To-date in case the new From-date is after it
        if (ChangedFromDate > ChangedToDate){
            ChangedToDate = new Date((new Date(newFromDateValue)).getTime() + (7 * 86400000.00));
        }
        let newFromDate = ChangedFromDate.getFullYear() + '-' + (ChangedFromDate.getMonth() + 1) + '-' + ChangedFromDate.getDate();
        let newToDate   = ChangedToDate.getFullYear()   + '-' + (ChangedToDate.getMonth()   + 1) + '-' + ChangedToDate.getDate();

        this.props.doDateChangeHandler(event, newFromDate, newToDate);
    };


    //Change of To-date
    ToDateChange (event){
        let newToDateValue = event.target.value;
        if (newToDateValue === ''){
            newToDateValue = this.props.dates[1];
        };

        let ChangedFromDate = new Date(this.props.dates[0]);
        let ChangedToDate   = new Date(newToDateValue);

        //Adapt From-date in case the new To-date is before it
        if (ChangedFromDate > ChangedToDate){
            ChangedFromDate = new Date((new Date(newToDateValue)).getTime() - (7 * 86400000.00));
        };

        let newFromDate = ChangedFromDate.getFullYear() + '-' + (ChangedFromDate.getMonth()+ 1) + '-' + ChangedFromDate.getDate() ;
        let newToDate   = ChangedToDate.getFullYear()   + '-' + (ChangedToDate.getMonth()  + 1) + '-' + ChangedToDate.getDate()   ;

        this.props.doDateChangeHandler(event, newFromDate, newToDate);

    };



    render() {
        return (
        <div className='InputContainer'>
            <form> 
            
                <p style={{'paddingTop': '20px'}}> 
                    FROM 
                </p>

                <input className = 'DateInputs' 
                       type      = 'date' 
                       id        = 'From_Date' 
                       value     = {this.props.dates[0]} 
                       onChange  = {this.FromDateChange}
                >
                </input>

                <p> TO </p>

                <input className = 'DateInputs' 
                       type      = 'date' 
                       id        = 'To_Date'  
                       style     = {{'marginBottom': '20px'}}
                       value     = {this.props.dates[1]} 
                       onChange  = {this.ToDateChange} 
                >
                </input>

            </form>
        </div>
        )
    };

};

export default UserInputRecruitment






