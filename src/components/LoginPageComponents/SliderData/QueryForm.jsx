import './QueryForm.css';

const QueryForm = () => {



  return (
    <div className="query-form-container">
      <form className="query-form">
        <h2>Please Fill The Value</h2>
        <div className="form-control">
          <label>Upload Image</label>
          <input type="file" />
        </div>
        <div className="form-control">
          <label>Heading</label>
          <input
            type="text"
            required
          />
        </div>
        <div className="form-control">
          <label>Text</label>
          <textarea
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      <div className="query-table">
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Heading</th>
              <th>Text</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>user-pic</td>
              <td>Lorem, ipsum.</td>
              <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, optio.</td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default QueryForm;
