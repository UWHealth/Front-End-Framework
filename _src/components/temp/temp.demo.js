import temp from './_temp.hbs';
import base from '../base/_base.hbs';

const data = {
    components: [
        temp({
            "update": {
                "time": "02:07",
                "date": "02/16/2018",
                "user": "Jane Doe"
            },
            "colorLists": [
                {
                    title: "University Hospital",
                    color: "yellow",
                    subtitles: [
                        {color: "yellow",   subtitle: "General Medicine"},
                        {color: "yellow",   subtitle: "Surgical"},
                        {color: "yellow",   subtitle: "IMC"},
                        {color: "red",   subtitle: "ICU"},
                        {color: "green",   subtitle: "Psych"},
                        {color: "yellow",   subtitle: "Cardiology"},
                        {color: "yellow",   subtitle: "ED"}
                    ]
                },
                {
                    title: "UnityPoint Health - Meriter",
                    color: "yellow",
                    subtitles: [
                        {color: "green",    subtitle: "Med/Surg"},
                        {color: "yellow",   subtitle: "IMC"},
                        {color: "yellow",   subtitle: "ICU"},
                        {color: "yellow",   subtitle: "Psych"},
                        {color: "yellow",   subtitle: "NICU"},
                        {color: "red",      subtitle: "Child Adol Psych"},
                        {color: "yellow",   subtitle: "ED"}
                    ]
                },
                {
                    title: "UW Health at The American Center",
                    color: "green",
                    subtitles: [
                        {color: "green",  subtitle: "Med/Surg"},
                        {color: "green",  subtitle: "IMC"},
                        {color: "green",  subtitle: "ED"},
                    ]
                },
                {
                    title: "American Family Children’s Hospital",
                    color: "green",
                    subtitles: [
                        {color: "green",   subtitle: "Med/Surg"},
                        {color: "yellow",  subtitle: "ICU"},
                        {color: "green",   subtitle: "NICU"},
                        {color: "green",   subtitle: "ED"}
                    ]
                }

            ]
        })
    ]
};

function render(locals) {
    return base(data);
};

export default {
    render: render
};
