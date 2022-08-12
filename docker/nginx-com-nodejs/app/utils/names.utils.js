exports.adaptNamesToQuery = function adaptNamesToQuery(names) {
  return names.reduce(
    (acc, [firstName, lastName]) => [`(\"${firstName}\", \"${lastName}\")`, ...acc],
    []
  );
};