function Report() {
  return (
    <div>
      <h2>Report Garbage</h2>

      <input type="file" />
      <br />
      <input placeholder="Enter location" />
      <br />
      <textarea placeholder="Description"></textarea>
      <br />

      <button>Submit</button>
    </div>
  );
}

export default Report;