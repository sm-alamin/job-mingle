// use local storage to manage cart data
const addToDb = id => {
    let jobInformation = getJobInformation();
    // add quantity
    const quantity = jobInformation[id];
    if (!quantity) {
        jobInformation[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        jobInformation[id] = newQuantity;
    }
    localStorage.setItem('job-information', JSON.stringify(jobInformation));
}

const removeFromDb = id => {
    const jobInformation = getJobInformation();
    if (id in jobInformation) {
        delete jobInformation[id];
        localStorage.setItem('job-information', JSON.stringify(jobInformation));
    }
}

const getJobInformation = () => {
    let jobInformation = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('job-information');
    if (storedCart) {
        jobInformation = JSON.parse(storedCart);
    }
    return jobInformation;
}

const deleteJobInformation = () => {
    localStorage.removeItem('job-information');
}

export {
    addToDb,
    removeFromDb,
    getJobInformation,
    deleteJobInformation
}