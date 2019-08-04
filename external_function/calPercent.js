const calPercent = (value, total, numOfFixed) => {
    if (isNaN(value) && isNaN(total) && isNaN(numOfFixed)) {
        return -1;
    } else if (total == 0) {
       return "...";
    }
    else {
        return ((value / total) * 100).toFixed(numOfFixed);
     }
};

export default calPercent