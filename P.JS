const fetching =  () => {
    const res =  fetch ('http://127.0.0.1:53550/');
    const data =  res.json;
    console.log(data)
}
fetching();