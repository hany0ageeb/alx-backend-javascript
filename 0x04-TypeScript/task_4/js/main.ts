namespace Subjects{
    export const cTeacher: Subjects.Teacher = {
        firstName: 'Ali',
        lastName: 'Momen',
        experienceTeachingC: 10,
    };
    export const react: Subjects.React = new Subjects.React();
    export const java: Subjects.Java = new Subjects.Java();
    export const cpp: Subjects.Cpp = new Subjects.Cpp();

    export function onWindowLoad(){
        console.log('C++');
        cpp.setTeacher(cTeacher);
        console.log(cpp.getRequirements());
        console.log(cpp.getAvailableTeacher());

        console.log('Java');
        java.setTeacher(cTeacher);
        console.log(java.getRequirements());
        console.log(java.getAvailableTeacher());

        console.log('React');
        react.setTeacher(cTeacher);
        console.log(react.getRequirements());
        console.log(react.getAvailableTeacher());
    }
}
window.addEventListener('load', function(){
    Subjects.onWindowLoad();
});