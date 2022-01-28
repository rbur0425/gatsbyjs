import React from 'react'

const Subscribe = () => {
    return (
        <section className="mailchimp-one">
            <div className="container">
                <div className="block-title text-center">
                    <h2 className="block-title__title">
                        Subscribe To My Newsletter <br /> Where I Share My
                        Thoughts on <br /> Product, SaaS, Design and Tech
                    </h2>
                </div>
                <div id="mc_embed_signup">
                    <form
                        action="https://rolandjburke.us14.list-manage.com/subscribe/post?u=4ad13fb19727857918a1ef1ce&amp;id=28e2bfefe7"
                        method="post"
                        className="mailchimp-one__mc-form mc-form validate"
                        id="mc-embedded-subscribe-form"
                        name="mc-embedded-subscribe-form"
                        novalidate
                    >
                        <label htmlFor="mce-EMAIL" className="sr-only">
                            Add email
                        </label>
                        <input
                            type="email"
                            id="mce-EMAIL"
                            placeholder="Email address"
                            className="formInput required email"
                            name="EMAIL"
                            placeholder="Your Email"
                        />
                        <div
                            id="mce-responses"
                            className="clear foot mc-form__response"
                        >
                            <div
                                className="response"
                                id="mce-error-response"
                                style={{ display: 'none' }}
                            ></div>
                            <div
                                className="response"
                                id="mce-success-response"
                                style={{ display: 'none' }}
                            ></div>
                        </div>
                        <div
                            style={{
                                position: 'absolute',
                                left: '-5000px',
                            }}
                            aria-hidden="true"
                        >
                            <input
                                type="text"
                                name="b_4ad13fb19727857918a1ef1ce_28e2bfefe7"
                                tabindex="-1"
                                value=""
                            />
                        </div>
                        <button
                            type="submit"
                            value="Subscribe"
                            name="subscribe"
                            id="mc-embedded-subscribe"
                        >
                            <i className="dimon-icon-right-arrow"></i>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default Subscribe
