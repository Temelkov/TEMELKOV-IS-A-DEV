import React, { Component } from "react";

class Contact extends Component {
    render() {
        if (this.props.resumeBasicInfo) {
            var sectionName = this.props.resumeBasicInfo.section_name.contact;
            var name = this.props.resumeBasicInfo.name;
            var email = this.props.resumeBasicInfo.email;
            var topic = this.props.resumeBasicInfo.topic;
            var message = this.props.resumeBasicInfo.message;
            var submit = this.props.resumeBasicInfo.submit;
        }

        const mystyle = {
            "text-align": "left",
            "font-size": "2em",
            "margin-bottom": "0px",
            "font-weight": "300px",
            "line-height": "2.7em",
            color: "rgb(0, 0, 0)"
        };
        return (
            <section id="contact">
                <div className="col-md-12">
                    <h1 style={{ color: "black" }}>
                        <span>{sectionName}</span>
                    </h1>
                </div>
                <br />
                <br />
                <br />

                <center>
                    <div class="col-md-8">
                        <section class="resume-section" style={{ width: "100%", "padding-bottom": "10%" }} id="contact">
                            <div class="my-auto">
                                <form class="contact-form flex-column" action="https://formspree.io/xzbdvdjq" method="POST">
                                    <div class="form-group w-75">
                                        <p style={mystyle}>{name}</p>
                                        <input type="name" class="form-control" style={{ "font-size": "1.5em" }} placeholder="Microsoft Bulgaria LTD" name="name" required />
                                    </div>

                                    <div class="form-group w-75" style={{ width: "100%" }}>
                                        <p style={mystyle}>{email}</p>
                                        <input type="email" class="form-control" style={{ "font-size": "1.5em" }} placeholder="example@example.com" name="email" required />
                                    </div>

                                    <div class="form-group w-75">
                                        <p style={mystyle}>{topic}</p>
                                        <input type="topic" class="form-control" style={{ "font-size": "1.5em" }} placeholder="Bussiness offer" name="topic" required />
                                    </div>

                                    <div class="form-group w-75">
                                        <p style={mystyle}>{message}</p>
                                        <textarea class="form-control" type="text" style={{ "font-size": "1.5em" }} placeholder="Your message here..." rows="7" name="message" required></textarea>
                                    </div>

                                    <button type="submit" style={{ "font-size": "1.5em" }} class="btn btn-submit btn-info w-75">{submit}</button>
                                </form>
                            </div>
                        </section>
                        <script defer src="https://use.fontawesome.com/releases/v5.7.2/js/all.js" integrity="sha384-0pzryjIRos8mFBWMzSSZApWtPl/5++eIfzYmTgBBmXYdhvxPc+XcFEk+zJwDgWbP" crossorigin="anonymous"></script>
                    </div>
                </center>
            </section>
        );
    }
}

export default Contact;
