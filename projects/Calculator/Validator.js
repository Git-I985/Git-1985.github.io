class Validator {
    validate(char) {
        console.log('Validator');
        return !char.match(/[A-zА-Я@#$&!=]/i);
    }
}

export default Validator;
