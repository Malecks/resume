function Resume() {
    return (
        <section className="resume">
            <Position company="Shopify" title="Sr. Product Designer" date="2021-Present"/>
            <Position company="League" title="Product Designer" date="2021"/>
            <div className="complex-position">
                <Position company="Nudge (now Axonify)" date="2016-2021"/>
                <Position title="Sr. Product Designer" date="2020"/>
                <Position title="Product Designer" date="2019"/>
                <Position title="Mobile Product Engineer" date="2018"/>
                <Position title="iOS Developer" date="2016"/>
            </div>
            <Position company="Palette Cam (iOS App)" title="Everything!" date="2016-Present"/>
            <Position company="Lighthouse Labs" title="Teaching Assistant, iOS" date="2016-2017"/>
            <Position company="MacLean's Magazine" title="Designer" date="2014-2016"/>
        </section>
    )
}

function Position({company, title, date}) {
    return (
        <div className="position">
            <div className="position-header">
                <div className={company ? "company" : "spacer"}>{company ?? null}</div>
                <div className={title ? "title" : "hidden"}>{title ?? null}</div>
            </div>
            <div className="interpunct" />
            <div className="position-date">{date}</div>
        </div>
    )
}

export default Resume