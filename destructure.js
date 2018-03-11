var saveFiled = {
  extension: 'jpg',
  name: 'repost,
  size: 14000
};

function fileSummary(file){
  return `The file ${file.name}.${file.extension} is of size ${file.size}.`;
}

// Destructure
function fileSummary({ name, extension, size}){
  return `The file ${name}.${extension} is of size ${size}.`;
}

