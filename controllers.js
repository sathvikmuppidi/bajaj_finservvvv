exports.getRequest = (req, res) => {
  res.status(200);
  res.json({
    operation_code: 1,
  });
};

exports.postRequest = (req, res) => {
  // console.log(req.body);
  const arr = req.body.data;
  // console.log(arr);
  let numbers = [];
  let alphabets = [];
  let highest_lowercase_alphabet = [];

  arr.forEach((element) => {
    console.log(element.charCodeAt(0));
    if (element.charCodeAt(0) >= 48 && element.charCodeAt(0) <= 57) {
      numbers.push(element);
    } else {
      alphabets.push(element);
    }
  });

  alphabets.forEach((element) => {
    if (97 <= element.charCodeAt(0) && 122 >= element.charCodeAt(0)) {
      if (highest_lowercase_alphabet.length == 0) {
        highest_lowercase_alphabet.push(element);
      } else {
        if (
          string.charCodeAt(highest_lowercase_alphabet[0]) <
          element.charCodeAt(0)
        ) {
          highest_lowercase_alphabet.pop();
          highest_lowercase_alphabet.push(element);
        }
      }
    }
  });
  res.status(204);
  res.json({
    is_success: true,
    user_id: "muppidi_mahesh_sathvik_23092003",
    email: "sathvikmuppidi23@gmail.com",
    roll_number: "21BCB0241",
    numbers: numbers,
    alphabets: alphabets,
    highest_lowercase_alphabet: highest_lowercase_alphabet,
  });
};
