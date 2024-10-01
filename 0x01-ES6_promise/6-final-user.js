import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const result = [];
  try {
    let value = await signUpUser(firstName, lastName);
    result.push({ status: 'Fulfilled', value });
    value = await uploadPhoto(fileName);
    result.push({ status: 'Fulfilled', value });
  } catch (e) {
    result.push({ status: 'Rejected', value: e });
  }
  return new Promise((() => result));
}
