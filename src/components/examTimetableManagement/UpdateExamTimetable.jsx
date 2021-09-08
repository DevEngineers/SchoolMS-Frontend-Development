import React from "react";
import { toast, ToastContainer } from "material-react-toastify";
import Select from "@material-ui/core/Select";
import { IconButton, MenuItem } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import ExamTimetableService from "../../services/ExamTimetableService";
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

class UpdateExamTimetable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timetableID: this.props.match.params.id,

      startSlot: [],
      endSlot: [],
      examDates: [],
      examSubjects: [],
      subjects: [],

      eClass: "",
      year: "",
      term: "",

      years: [],
      eTerms: [],
    };
  }

  componentDidMount() {
    ExamTimetableService.getExamTimetableByID(this.state.timetableID).then(
      (res) => {
        this.setState({
          eClass: res.class,
          year: res.year,
          term: res.term,
          startSlot: res.startSlot,
          endSlot: res.endSlot,
          examDates: res.examDates,
          examSubjects: res.examSubjects,
        });
      }
    );

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

  /**
   * this function is capture names in the dynamically
   * populated input field and storing those names in an state array
   */
  handleChangeOnStartSlot(i, event) {
    let startSlot = [...this.state.startSlot];
    startSlot[i] = event.target.value;
    this.setState({ startSlot });
  }

  handleChangeOnEndSlot(i, event) {
    let endSlot = [...this.state.endSlot];
    endSlot[i] = event.target.value;
    this.setState({ endSlot });
  }

  handleChangeSubjects(i, event) {
    let examSubjects = [...this.state.examSubjects];
    examSubjects[i] = event.target.value;
    this.setState({ examSubjects });
  }

  handleChangeDate(i, event) {
    let examDates = [...this.state.examDates];
    examDates[i] = event.target.value;
    this.setState({ examDates });
  }
  /**
   * this function is to dynamically create time input field in the subjects timeslot
   */
  addClickOn() {
    this.setState((prevState) => ({ startSlot: [...prevState.startSlot, ""] }));
    this.setState((prevState) => ({ endSlot: [...prevState.endSlot, ""] }));
    this.setState((prevState) => ({
      examSubjects: [...prevState.examSubjects, ""],
    }));
    this.setState((prevState) => ({ examDates: [...prevState.examDates, ""] }));
  }

  /**
   * this function is to remove dynamically created time input field in subjects timeslot
   */
  removeClick(i) {
    let startSlot = [...this.state.startSlot];
    startSlot.splice(i, 1);
    this.setState({ startSlot });

    let endSlot = [...this.state.endSlot];
    endSlot.splice(i, 1);
    this.setState({ endSlot });

    let examSubjects = [...this.state.examSubjects];
    examSubjects.splice(i, 1);
    this.setState({ examSubjects });

    let examDates = [...this.state.examDates];
    examDates.splice(i, 1);
    this.setState({ examDates });
  }

  cancelUpdate() {
    this.props.history.push("/manageExamTimetable");
  }

  updateExamTimetable(event) {
    event.preventDefault();
    let examTimetable = {
      class: this.state.eClass._id,
      year: this.state.year,
      term: this.state.term,
      startSlot: this.state.startSlot,
      endSlot: this.state.endSlot,
      examDates: this.state.examDates,
      examSubjects: this.state.examSubjects,
    };

    if (examTimetable.class === "") {
      toast.warn("Select the Class", options);
    } else if (examTimetable.year === "") {
      toast.warn("Select the Year", options);
    } else if (examTimetable.term === "") {
      toast.warn("Select the Term", options);
    } else if (examTimetable.examDates.includes("")) {
      toast.warn("Select Exam Dates", options);
    } else if (examTimetable.examSubjects.includes("")) {
      toast.warn("Select Subjects", options);
    } else {
      ExamTimetableService.updateExamTimetable(
        this.state.timetableID,
        examTimetable
      ).then((res) => {
        if (res.status === 200) {
          toast.success("Exam Timetable Updated Successfully", options);
          setTimeout(() => {
            this.props.history.push("/manageExamTimetable");
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
        <ToastContainer />
        <div>
          <div className={"box"}>
            <label className={"custom-underline"}>UPDATE EXAM TIMETABLE</label>
          </div>
        </div>
        <div id={"largeExamDiv"}>
          <form>
            <div id={"form-style-examClass"}>
              <div id={"examLabelEDiv"}>
                <label className={"classELabel"}>Class</label>
                <label className={"classELabel"}>Year</label>
                <label className={"classELabel"}>Term</label>
              </div>
              <div id={"classSelectOpt"}>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name={"eClass"}
                  value={this.state.eClass}
                  className={"classSize"}
                  onChange={(event) => this.onChange(event)}
                  displayEmpty
                >
                  <MenuItem value={this.state.eClass}>
                    <span className={"selectPName"}>
                      {this.state.eClass.class}
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
                    <span className={"selectPName"}>{this.state.year}</span>
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
                    <span className={"selectPName"}>{this.state.term}</span>
                  </MenuItem>
                </Select>
              </div>
            </div>
            <div id={"secondDiv"}>
              <div id={"form-style-examR"}>
                <label id={"timeSlotETitle"}>Dates</label>
                {this.state.examDates.map((el, i) => (
                  <div className={"dateInput"} key={i}>
                    <TextField
                      type="date"
                      id="date"
                      value={el || ""}
                      onChange={this.handleChangeDate.bind(this, i)}
                    />
                  </div>
                ))}
              </div>
              <div id={"form-style-timeSlotE"}>
                <label id={"timeSlotTitle"}>Time Slot</label>
                {this.state.startSlot.map((el, i) => (
                  <div key={i}>
                    <TextField
                      type="time"
                      value={el || ""}
                      disabled={this.state.checkedTimeSlot === true}
                      onChange={this.handleChangeOnStartSlot.bind(this, i)}
                    />
                    <label id={"timeID"}> to </label>
                    <TextField
                      type="time"
                      value={this.state.endSlot[i] || ""}
                      disabled={this.state.checkedTimeSlot === true}
                      onChange={this.handleChangeOnEndSlot.bind(this, i)}
                    />
                  </div>
                ))}
              </div>
              <div id={"form-style-examR"}>
                <div id={"form-style-examR-inside"}>
                  <label id={"timeSlotTitle"}>Subjects</label>
                  {this.state.examSubjects.map((el, i) => (
                    <div key={i}>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={el || ""}
                        onChange={this.handleChangeSubjects.bind(this, i)}
                        className={"daySize"}
                      >
                        <MenuItem value={this.state.examSubjects[i]}>
                          <span className={"selectPName"}>
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
                  {this.state.examSubjects.map((el, i) =>
                    this.state.examSubjects.length - 1 === i ? (
                      i !== 4 ? (
                        <div>
                          <IconButton
                            aria-label="delete"
                            style={{ backgroundColor: "transparent" }}
                            onClick={this.removeClick.bind(this, i)}
                          >
                            <DeleteIcon className={"timeslotIconEB"} />
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
                      <AddIcon className={"timeslotIconEA"} />
                    </IconButton>
                  </div>
                </div>
              </div>
            </div>
            <div className={"btnEDiv"}>
              <input
                type={"submit"}
                id={"submitEBtn"}
                value={"Update Timetable"}
                onClick={this.updateExamTimetable.bind(this)}
              />
              <input
                type={"reset"}
                id={"restEBtn"}
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

export default UpdateExamTimetable;
