interface MajorCredits{
    credits: number;
    readonly brand: 'MajorCredits' = 'MajorCredits';
}
interface MinorCredits{
    credits: number;
    readonly brand: 'MinorCredits' = 'MinorCredits';
}
function sumMajorCredits(subject1: MajorCredits | MinorCredits, subject2: MajorCredits | MinorCredits): MajorCredits{
    return [subject1, subject2].filter(subj => subj.brand === 'MajorCredits').reduce((pre, cur) =>{
        return {
            credits: pre.credits + cur.credits,
            brand: 'MajorCredits',
        };
    }, {credits: 0});
}
function sumMinorCredits(subject1: MajorCredits | MinorCredits, subject2: MajorCredits | MinorCredits): MinorCredits{
    return [subject1, subject2].filter(subj => subj.brand === 'MinorCredits').reduce((pre, cur) =>{
        return {
            credits: pre.credits + cur.credits,
            brand: 'MinorCredits',
        };
    }, {credits: 0});
}