import gradeService from "../../service/GradeService";

const getGrades = async () => {
    let data = (await gradeService.get('/grade/')).data;
    return data
    
}


export default getGrades;