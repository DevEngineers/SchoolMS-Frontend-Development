import React from "react";
import Select from "@material-ui/core/Select";
import { IconButton, MenuItem } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import "../../styles/timetableAndResultStyles/Results.css";
import { toast } from "material-react-toastify";
import ResultService from "../../services/ResultService";
import SubjectService from "../../services/SubjectService";

/**
 * @author : M.N.M Akeel
 * Registration Number : IT19153414
 */

//Toast Message Configuration
const options = {
  position: "top-center",
  autoClose: 2000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: false,
};

class UpdateResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resultID: this.props.match.params.id,

      subjects: [],
      grades: ["A+", "A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D", "F"],

      rClass: "",
      rClassType: "",
      year: "",
      term: "",
      studentID: "",
      sGrades: [],
      examMarks: [],
      examSubjects: [],

      classes: [],
      classTypes: [],
      years: [],
      eTerms: [],
      students: [],
    };
  }

  componentDidMount() {
    ResultService.getResultsByID(this.state.resultID).then((res) => {
      this.setState({
        rClass: res.class,
        rClassType: res.classType,
        year: res.year,
        term: res.term,
        studentID: res.studentID,
        sGrades: res.grades,
        examMarks: res.examMarks,
        examSubjects: res.examSubjects,
      });
    });

    SubjectService.getSubjects()
      .then((res) => {
        this.setState({ subjects: res });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  /**
   * this function is to capture data in the input fields
   */
  onChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleChangeSubject(i, event) {
    let examSubjects = [...this.state.examSubjects];
    examSubjects[i] = event.target.value;
    this.setState({ examSubjects });
  }

  handleChangeMarks(i, event) {
    let examMarks = [...this.state.examMarks];
    examMarks[i] = event.target.value;
    this.setState({ examMarks });
  }

  handleChangeGrade(i, event) {
    let sGrades = [...this.state.sGrades];
    sGrades[i] = event.target.value;
    this.setState({ sGrades });
  }

  /**
   * this function is to dynamically create time input field in the subjects timeslot
   */
  addClickOn() {
    this.setState((prevState) => ({ sGrades: [...prevState.sGrades, ""] }));
    this.setState((prevState) => ({
      examSubjects: [...prevState.examSubjects, ""],
    }));
    this.setState((prevState) => ({ examMarks: [...prevState.examMarks, ""] }));
  }

  /**
   * this function is to remove dynamically created time input field in subjects timeslot
   */
  removeClick(i) {
    let sGrades = [...this.state.sGrades];
    sGrades.splice(i, 1);
    this.setState({ sGrades });

    let examSubjects = [...this.state.examSubjects];
    examSubjects.splice(i, 1);
    this.setState({ examSubjects });

    let examMarks = [...this.state.examMarks];
    examMarks.splice(i, 1);
    this.setState({ examMarks });
  }

  cancelUpdate() {
    this.props.history.push("/manageResults");
  }

  updateResults(event) {
    event.preventDefault();
    let result = {
      class: this.state.rClass._id,
      classType: this.state.rClassType._id,
      year: this.state.year,
      term: this.state.term,
      studentID: this.state.studentID,
      examSubjects: this.state.examSubjects,
      grades: this.state.sGrades,
      examMarks: this.state.examMarks,
    };

    if (result.class === "") {
      toast.warn("Select the Class", options);
    } else if (result.classType === "") {
      toast.warn("Select the Class Type", options);
    } else if (result.year === "") {
      toast.warn("Select the Year", options);
    } else if (result.term === "") {
      toast.warn("Select the Term", options);
    } else if (result.studentID === "") {
      toast.warn("Select the Student ID", options);
    } else if (result.examSubjects.includes("")) {
      toast.warn("Select Exam Subjects", options);
    } else if (result.examMarks.includes("")) {
      toast.warn("Enter Exam Marks", options);
    } else if (result.grades.includes("")) {
      toast.warn("Select Exam Grade", options);
    } else {
      ResultService.updateResult(this.state.resultID, result).then((res) => {
        if (res.status === 200) {
          toast.success("Result Updated Successfully", options);
          setTimeout(() => {
            this.props.history.push("/manageResults");
          }, 3000);
        } else {
          toast.error("Something went wrong!! Try again.", options);
        }
      });
    }
  }

  render() {
    return (
      <div>
        <div>
          <div className={"box"}>
            <label className={"custom-underline"}>UPDATE EXAM RESULTS</label>
          </div>
        </div>
        <div id={"largeResultDiv"}>
          <form>
            <div id={"form-style-resultClass"}>
              <div id={"examLabelEDiv"}>
                <label className={"classELabel"}>Class</label>
                <label className={"classELabel"}>Class Type</label>
                <label className={"classELabel"}>Year</label>
                <label className={"classELabel"}>Term</label>
                <label className={"classELabel"}>Student ID</label>
              </div>
              <div id={"classSelectOpt"}>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name={"rClass"}
                  value={this.state.rClass}
                  className={"classSize"}
                  onChange={(event) => this.onChange(event)}
                  displayEmpty
                >
                  <MenuItem value={this.state.rClass}>
                    <span className={"selectRName"}>
                      {this.state.rClass.class}
                    </span>
                  </MenuItem>
                </Select>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name={"rClassType"}
                  value={this.state.rClassType}
                  className={"classSize"}
                  onChange={(event) => this.onChange(event)}
                  displayEmpty
                >
                  <MenuItem value={this.state.rClassType}>
                    <span className={"selectRName"}>
                      {this.state.rClassType.name}
                    </span>
                  </MenuItem>
                </Select>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name={"year"}
                  value={this.state.year}
                  className={"classSize"}
                  onChange={(event) => this.onChange(event)}
                  displayEmpty
                >
                  <MenuItem value={this.state.year}>
                    <span className={"selectRName"}>{this.state.year}</span>
                  </MenuItem>
                </Select>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name={"term"}
                  value={this.state.term}
                  className={"classSize"}
                  onChange={(event) => this.onChange(event)}
                  displayEmpty
                >
                  <MenuItem value={this.state.term}>
                    <span className={"selectRName"}>{this.state.term}</span>
                  </MenuItem>
                </Select>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name={"studentID"}
                  value={this.state.studentID}
                  className={"classSize"}
                  onChange={(event) => this.onChange(event)}
                  displayEmpty
                >
                  <MenuItem value={this.state.studentID}>
                    <span className={"selectRName"}>
                      Nimal Kumara{/*{this.state.studentID}*/}
                    </span>
                  </MenuItem>
                </Select>
              </div>
            </div>
            <div id={"secondSDiv"}>
              <div id={"form-style-result"}>
                <div id={"form-style-examR-inside"}>
                  <label id={"timeSlotTitle"}>Subjects</label>
                  {this.state.examSubjects.map((el, i) => (
                    <div key={i}>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={el || ""}
                        onChange={this.handleChangeSubject.bind(this, i)}
                        className={"daySize"}
                      >
                        <MenuItem value={this.state.examSubjects[i]}>
                          <span className={"selectRName"}>
                            {this.state.examSubjects[i]}
                          </span>
                        </MenuItem>
                        {this.state.subjects.map((subject) =>
                          this.state.examSubjects[i] ===
                          subject.subject ? null : (
                            <MenuItem key={subject} value={subject.subject}>
                              <span className={"selectCName"}>
                                {subject.subject}
                              </span>
                            </MenuItem>
                          )
                        )}
                      </Select>
                    </div>
                  ))}
                </div>
              </div>
              <div id={"form-style-marksR"}>
                <label id={"timeSlotTitle"}>Marks</label>
                {this.state.examMarks.map((el, i) => (
                  <div key={i}>
                    <TextField
                      type="text"
                      value={el || ""}
                      onChange={this.handleChangeMarks.bind(this, i)}
                    />
                  </div>
                ))}
              </div>
              <div id={"form-style-examR"}>
                <div id={"form-style-examR-inside"}>
                  <label id={"timeSlotTitle"}>Grade</label>
                  {this.state.sGrades.map((el, i) => (
                    <div key={i}>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={el || ""}
                        onChange={this.handleChangeGrade.bind(this, i)}
                        className={"daySize"}
                      >
                        <MenuItem value={this.state.sGrades[i]}>
                          <span className={"selectRName"}>
                            {this.state.sGrades[i]}
                          </span>
                        </MenuItem>
                        {this.state.grades.map((grade) => (
                          <MenuItem key={grade} value={grade}>
                            {grade}
                          </MenuItem>
                        ))}
                      </Select>
                    </div>
                  ))}
                  {this.state.examSubjects.map((el, i) =>
                    this.state.examSubjects.length - 1 === i ? (
                      i !== 4 ? (
                        <div>
                          <IconButton
                            aria-label="delete"
                            style={{ backgroundColor: "transparent" }}
                            onClick={this.removeClick.bind(this, i)}
                          >
                            <DeleteIcon className={"timeslotIconRB"} />
                          </IconButton>
                        </div>
                      ) : null
                    ) : null
                  )}
                  <div>
                    <IconButton
                      aria-label="add"
                      style={{ backgroundColor: "transparent" }}
                      onClick={this.addClickOn.bind(this)}
                    >
                      <AddIcon className={"timeslotIconRA"} />
                    </IconButton>
                  </div>
                </div>
              </div>
            </div>
            <div className={"btnEDiv"}>
              <input
                type={"submit"}
                id={"submitRBtn"}
                value={"Update Results"}
                onClick={this.updateResults.bind(this)}
              />
              <input
                type={"reset"}
                id={"restRBtn"}
                value={"Cancel"}
                onClick={this.cancelUpdate.bind(this)}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default UpdateResult;
