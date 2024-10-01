export default async function handleResponseFromAPI(promise) {
  try {
    await promise;
    console.log('Got a response from the API');
    return {
      status: 200,
      body: 'Success',
    };
  } catch (e) {
    console.log('Got a response from the API');
    return new Error();
  }
}
