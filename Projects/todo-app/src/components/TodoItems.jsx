function TodoItems() {
  let todoName1 = "Buy Milk";
  let todoDate1 = "29/11/2023";

  let todoName2 = "Go to office";
  let todoDate2 = "29/11/2023";

  return (
    <div class="container">
      <div class="row kg-row">
        <div class="col-6">{todoName1}</div>
        <div class="col-4">{todoDate1}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger kg-button">
            Delete
          </button>
        </div>
      </div>
      <div class="row">
        <div class="col-6">{todoName2}</div>
        <div class="col-4">{todoDate2}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger kg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItems;
