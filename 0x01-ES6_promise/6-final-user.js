import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const result = [];
  try {
    let value = await signUpUser(firstName, lastName);
    result.push({ status: 'fulfilled', value });
    value = await uploadPhoto(fileName);
    result.push({ status: 'fulfilled', value });
  } catch (e) {
    result.push({ status: 'rejected', value: e.toString() });
  }
  return Promise.resolve(result);
}
