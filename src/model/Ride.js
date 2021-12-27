class Ride {
    constructor(data) {
       this.rideType=data.rideType;
       this.added=data.added;
       this.total=data.total;
       this.rideDate=new Date(data.rideDate);
    }


}

export default Ride;
