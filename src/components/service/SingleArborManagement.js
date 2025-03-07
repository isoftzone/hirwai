import React from 'react';
import { Link } from 'react-router-dom';
import ServiceSearchWidget from './ServiceSearchWidget';
import ServiceButtonWidget from './ServiceButtonWidget';
import ServiceSupportWidget from './ServiceSupportWidget';
import ServiceTagsWidget from './ServiceTagsWidget';

export default class SingleArborManagement extends React.Component {
    componentDidMount() {
        

        const $ = window.$;

        // if ($('.accordion-box').length) {
        //     $(".accordion-box").on('click', '.acc-btn', function () {

        //         var outerBox = $(this).parents('.accordion-box');
        //         var target = $(this).parents('.accordion');

        //         if ($(this).hasClass('active') !== true) {
        //             $(outerBox).find('.accordion .acc-btn').removeClass('active');
        //         }

        //         if ($(this).next('.acc-content').is(':visible')) {
        //             return false;
        //         } else {
        //             $(this).addClass('active');
        //             $(outerBox).children('.accordion').removeClass('active-block');
        //             $(outerBox).find('.accordion').children('.acc-content').slideUp(300);
        //             target.addClass('active-block');
        //             $(this).next('.acc-content').slideDown(300);
        //         }
        //     });
        // }





        
        if ($('.accordion-box').length) {
            let clickTimeout;
        
            $(".accordion-box").on('click', '.acc-btn', function () {
                var outerBox = $(this).parents('.accordion-box');
                var target = $(this).parents('.accordion');
        
                // Clear the previous timeout if it exists
                clearTimeout(clickTimeout);
        
                // Set a timeout to handle the single click
                clickTimeout = setTimeout(() => {
                    // If the clicked button is not already active, activate it
                    if (!$(this).hasClass('active')) {
                        $(outerBox).find('.acc-btn').removeClass('active');
                        $(outerBox).find('.acc-content').slideUp(300);
                        
                        $(this).addClass('active');
                        target.addClass('active-block');
                        $(this).next('.acc-content').slideDown(300);
                    }
                }, 200); // Adjust the timeout duration as needed
        
                // Handle double click
                $(this).dblclick(function () {
                    // Clear the single click timeout
                    clearTimeout(clickTimeout);
        
                    // If the clicked button is active, deactivate it
                    if ($(this).hasClass('active')) {
                        $(this).removeClass('active');
                        target.removeClass('active-block');
                        $(this).next('.acc-content').slideUp(300);
                    }
                });
            });
        }

    }
    render() {
        let para = this.props.para;
        let publicUrl = process.env.PUBLIC_URL + '/'
        return (
            <>
                <section className="services-details">
                    <div className="container">



                        {
                            para === 'Hardscapes' ? (
                                <div className="row">
                                    {/* Start Services Details Content */}
                                    <div className="col-xl-8">
                                        <div className="services-details__content">
                                            <div className="services-details__content-img1">
                                                <img src={publicUrl + "assets/images/services/hard-content1.png"} alt="#" />    
                                            </div>

                                            <div className="text-box1">
                                                <h2>Hardscapes In Hirwai</h2>
                                                <p className="text1">Expert Hardscaping for Beautiful, Functional Outdoor Spaces Transform your outdoor space with professional hardscaping services. Whether you're looking to build an elegant patio, a durable walkway, or a cozy outdoor kitchen, we specialize in creating stunning hardscape designs that perfectly complement your landscape.</p>
                                                <p> Enhance your outdoor living space with custom-built patios and decks designed for relaxation and entertainment. Our expert team uses high-quality materials like natural stone, brick, and concrete to create beautiful, lasting surfaces for your family and guests to enjoy.</p><br />

                                                <h5>Walkways & Pathways</h5>
                                                <p> Create a welcoming entrance to your home or garden with beautifully crafted walkways. From flagstone paths to gravel walkways, we offer a wide range of materials to fit your design preferences and budget.</p>

                                                Retaining Walls
                                                Stabilize slopes and add aesthetic value to your landscape with expertly designed retaining walls. Whether you want to define garden beds or prevent erosion, our durable walls are built to last and will complement any outdoor space.
                                                <ul>

                                                </ul>
                                            </div>




                                            <div className="services-details__content-img2">
                                                <img src={publicUrl + "assets/images/services/hard-content2.png"} alt="#" />
                                            </div>

                                            <div className="text-box3">
                                                <h5>Driveways & Paving</h5>
                                                <p>Make a lasting first impression with a custom driveway or paved area. Our high-quality paving solutions are designed for durability, functionality, and style, ensuring your driveway withstands the test of time.</p>

                                            </div>


                                            <div className="text-box4">
                                                <div className="img-box">
                                                    <img src={publicUrl + "assets/images/services/hard-content-small.png"} alt="#" />
                                                </div>

                                                <div className="content-box">
                                                    <h5>Outdoor Kitchens & Firepits</h5>
                                                    <p> Take your outdoor living to the next level with custom-built outdoor kitchens and firepits. Enjoy cooking and dining under the stars, or gather around a cozy fire with family and friends. Our designs incorporate durable materials and modern features that enhance your backyard.</p>
                                                </div>

                                            </div><br />

                                            <div >

                                                <br /><h5>Our Hardscape Services:</h5><br />
                                                <h6>Patios & Decks</h6>
                                                <p>Enhance your outdoor living space with custom-built patios and decks designed for relaxation and entertainment. Our expert team uses high-quality materials like natural stone, brick, and concrete to create beautiful, lasting surfaces for your family and guests to enjoy.</p>

                                                <h6>Walkways & Pathways</h6>
                                                <p>Create a welcoming entrance to your home or garden with beautifully crafted walkways. From flagstone paths to gravel walkways, we offer a wide range of materials to fit your design preferences and budget.</p>

                                                <h6>Retaining Walls</h6>
                                                <p>Stabilize slopes and add aesthetic value to your landscape with expertly designed retaining walls. Whether you want to define garden beds or prevent erosion, our durable walls are built to last and will complement any outdoor space.</p>

                                                <h6>Driveways & Paving</h6>
                                                <p>Make a lasting first impression with a custom driveway or paved area. Our high-quality paving solutions are designed for durability, functionality, and style, ensuring your driveway withstands the test of time.</p>

                                                <h6>Outdoor Kitchens & Firepits</h6>
                                                <p>Take your outdoor living to the next level with custom-built outdoor kitchens and firepits. Enjoy cooking and dining under the stars, or gather around a cozy fire with family and friends. Our designs incorporate durable materials and modern features that enhance your backyard.</p>

                                                <h6>Water Features & Pools</h6>
                                                <p>Add tranquility and beauty to your landscape with water features like fountains, ponds, and waterfalls. Our team can also design custom pools that integrate seamlessly into your backyard, offering both relaxation and style.</p>

                                            </div>




                                            <div className="faq-two__accordion faq-two__accordion--services">
                                                <h5> Why Choose Us for Your Hardscaping Needs</h5><br />
                                                <ul className="accordion-box">
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Expert Design & Installation
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Our team has years of experience in hardscape design and installation, ensuring that every project
                                                                is completed to the highest standards. </p>
                                                        </div>
                                                    </li>

                                                    <li className="accordion block active-block">
                                                        <div className="acc-btn active">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Quality Materials
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content current">
                                                            <p>We use only the best materials, so your hardscaping projects are durable and long-lasting. </p>
                                                        </div>
                                                    </li>

                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Personalized Service
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>We listen to your needs and tailor every project to fit your unique style and budget.</p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Satisfaction Guaranteed
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>We take pride in our work and are committed to delivering exceptional results that exceed your expectations.</p>
                                                        </div>
                                                    </li>
                                                </ul><br /><br /><br />

                                                <h5> Frequently Asked Questions (FAQs)</h5><br />
                                                <ul className="accordion-box">
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                What is hardscaping
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Hardscaping refers to the non-plant elements of your outdoor landscape design. This includes elements
                                                                like patios, walkways, retaining walls, driveways, firepits, outdoor kitchens, and other built structures.
                                                                Hardscaping adds both beauty and functionality to your yard, helping to define spaces and improve the overall aesthetic </p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                How much does hardscaping cost
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>The cost of hardscaping depends on several factors, including the size and complexity of the project,
                                                                the materials used, and your location. At [Your Company Name], we offer personalized quotes based on your specific
                                                                needs and budget. Contact us for a free consultation, and we'll provide a detailed estimate for your project </p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                How long will my hardscape project take to complete
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>The timeline for completing your hardscape project can vary depending on the scope and complexity.
                                                                Smaller projects, like walkways or patios, typically take a few days to a week, while larger projects
                                                                like retaining walls or custom outdoor kitchens may take longer. We’ll give you an estimated timeline during your
                                                                consultation so you know exactly what to expect.</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Can you help me with design ideas for my outdoor space
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Absolutely! Our team of experts will work closely with you to understand your vision and offer design ideas that
                                                                suit your style, needs, and budget. We’ll ensure the hardscape elements we design complement your existing landscape
                                                                and enhance the functionality of your outdoor space </p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                What materials do you use for hardscaping
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>We use a variety of high-quality materials, including natural stone, concrete, brick, pavers, gravel,
                                                                and more. Our team will guide you in selecting the best materials for your project based on durability,
                                                                style, and budget considerations. </p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Will my hardscape project require any maintenance
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>While hardscaping features are generally low-maintenance, they do require some care to maintain their beauty and functionality.
                                                                Regular cleaning, sealing, and occasional repairs (such as fixing cracks or replacing broken pavers) will help extend the
                                                                life of your hardscaping elements. Our team can advise you on proper maintenance for your specific project </p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Start Sidebar */}
                                    <div className="col-xl-4">
                                        <div className="sidebar">
                                            <ServiceSearchWidget />
                                            {/* Start Sidebar Single */}
                                            <div className="sidebar__single sidebar__category wow animated fadeInUp " data-wow-delay="0.2s">
                                                <h3 className="sidebar__title">Services</h3>
                                                <ul className="sidebar__category-list">
                                                    <li className="active"><Link to={process.env.PUBLIC_URL + `/hardscapes`}>Hardscapes </Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/designerWalls`}>Designer Walls</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/rockGardens`}>Rock Gardens</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/deck`}>Deck</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/sculptures`}>Sculptures</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/pergolas`}>Pergolas</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/pavedAreas`}>PavedAreas</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/ornamentalFabrication`}>Ornamental Fabrication</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/murals`}>Murals</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/gazebo`}>Gazebo</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/pathways`}>Pathways</Link></li>
                                                </ul>
                                            </div>
                                            {/* End Sidebar Single */}
                                            {/* <ServiceButtonWidget />
                                            <ServiceTagsWidget />
                                            <ServiceSupportWidget /> */}
                                        </div>
                                        {/* End Sidebar */}
                                    </div>
                                    {/* End Services Details Content */}
                                </div>
                            ) : para === 'Pathways' ? (
                                <div className="row">
                                    {/* Start Services Details Content */}
                                    <div className="col-xl-8">
                                        <div className="services-details__content">
                                            <div className="services-details__content-img1">
                                                <img src={publicUrl + "assets/images/services/pathways-content1.png"} alt="#" />
                                            </div>

                                            <div className="text-box1">
                                                <h2>Pathways In Hirwai</h2>
                                                <p className="text1">At Pathways Landscaping, we believe that your outdoor spaces should be as beautiful and functional as the inside of your home. Whether you're looking to create a lush garden oasis, install a stylish pathway, or transform your entire landscape, our team is here to bring your vision to life.</p>
                                                <p>Here's a draft of website content for Pathways Landscaping, focusing on services, expertise, and a welcoming tone</p><br />

                                                <h5>Consultation</h5>
                                                <p>During the initial consultation, we discuss your ideas, preferences, and budget. We take the time to understand your needs and gather essential details about your property.
                                                    We offer competitive pricing for our services, ensuring you get the best value for your investment without compromising on quality.</p>
                                                <ul>

                                                </ul>
                                            </div>




                                            <div className="services-details__content-img2">
                                                <img src={publicUrl + "assets/images/services/pathways-content2.png"} alt="#" />
                                            </div>

                                            <div className="text-box3">
                                                <h5>Expert Design and Customization</h5>
                                                <p>We offer custom landscape designs tailored to your specific needs and preferences. Our experienced team listens to your ideas and vision, ensuring that the design reflects your style while enhancing the functionality of your outdoor space.</p>

                                            </div>


                                            <div className="text-box4">
                                                <div className="img-box">
                                                    <img src={publicUrl + "assets/images/services/pathways-content-small.png"} alt="#" />
                                                </div>

                                                <div className="content-box">
                                                    <h5>Increased Property Value</h5>
                                                    <p>A well-designed landscape boosts the curb appeal of your home and increases its market value. High-quality landscaping can give your property a competitive edge if you plan to sell, creating a lasting first impression with potential buyers.</p>
                                                </div>

                                            </div><br />

                                            <div >

                                                <br /><h5>Our Pathway Services:</h5><br />
                                                <h6>Pathway Installation</h6>
                                                <p>From charming cobblestone paths to sleek modern walkways, we specialize in creating custom pathways that provide both functionality and aesthetic appeal. Our durable and beautiful pathways guide visitors through your landscape with elegance and ease.</p>

                                                <h6>Landscaping Design & Installation</h6>
                                                <p>Transform your yard into a stunning masterpiece with professional landscape design. We’ll work with you to design the perfect outdoor space that enhances your home’s beauty and reflects your style.</p>

                                                <h6>Garden Design & Maintenance</h6>
                                                <p>Whether you want to create a vibrant garden full of seasonal blooms or a tranquil space with native plants, our expert team is here to design, plant, and maintain your garden year-round.</p>

                                                <h6>Outdoor Lighting</h6>
                                                <p>Illuminate your landscape with strategically placed outdoor lighting. We offer custom lighting solutions to highlight your favorite features and provide safety and ambiance after dark.</p>

                                                <h6>Lawn Care & Maintenance</h6>
                                                <p>Keep your lawn lush and healthy with our comprehensive lawn care services, including mowing, fertilization, aeration, and more. We ensure your lawn looks pristine throughout the year.</p>

                                                <h6>Smart Technology</h6>
                                                <p> Incorporate smart irrigation systems and outdoor lighting that can be controlled from your smartphone for convenience and efficiency.</p>
                                            </div>




                                            <div className="faq-two__accordion faq-two__accordion--services">
                                                <h5> Why Choose Pathways</h5><br />
                                                <ul className="accordion-box">
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Experienced Team
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>With years of experience in landscaping, our team brings knowledge, creativity, and attention to detail to every project.</p>
                                                        </div>
                                                    </li>

                                                    <li className="accordion block active-block">
                                                        <div className="acc-btn active">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Quality Workmanship
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content current">
                                                            <p>We use only the highest quality materials and work meticulously to ensure every project exceeds expectations.</p>
                                                        </div>
                                                    </li>

                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Personalized Service
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>We understand that every customer’s needs are unique. We’ll work with you every step of the way to create an outdoor space you’ll love.</p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Sustainable Practices
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>We are committed to environmentally-friendly landscaping practices, using sustainable materials and techniques whenever possible.</p>
                                                        </div>
                                                    </li>
                                                </ul><br /><br /><br />

                                                <h5> Frequently Asked Questions (FAQs)</h5><br />
                                                <ul className="accordion-box">
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                How long will my landscaping project take?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>The timeline for your project depends on its size and complexity. Typically, small projects like garden bed installations take a few days, while larger projects such as full landscape designs may take several weeks. We’ll provide a detailed timeline during your consultation.</p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Do you offer landscape maintenance services?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Yes! We offer regular lawn care, garden maintenance, pruning, and seasonal cleanups. We can create a customized maintenance plan based on your landscape's needs.</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Can you design a landscape for my unique site?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Absolutely! We specialize in designing landscapes tailored to your specific location, taking into account soil quality, sunlight, drainage, and other factors.</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Do I need to be present during the installation?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>While you don’t need to be present the entire time, we encourage at least one visit during installation to ensure we’re meeting your expectations. Our team will handle all the logistics and communicate with you regularly. </p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                How do I get started with Pathways Landscaping?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>To get started, simply contact us to schedule a consultation. During this meeting, we’ll discuss your ideas, budget, and vision for your landscape. From there, we will develop a custom design tailored to your needs.</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                How much will my landscaping project cost?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>The cost of your project will depend on factors such as the size of the area, the complexity of the design, the materials chosen, and the type of services required. After our consultation and design phase, we’ll provide a detailed, transparent estimate so you know exactly what to expect.</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Start Sidebar */}
                                    <div className="col-xl-4">
                                        <div className="sidebar">
                                            <ServiceSearchWidget />
                                            {/* Start Sidebar Single */}
                                            <div className="sidebar__single sidebar__category wow animated fadeInUp" data-wow-delay="0.2s">
                                                <h3 className="sidebar__title">Services</h3>
                                                <ul className="sidebar__category-list">
                                                    <li className="active"><Link to={process.env.PUBLIC_URL + `/hardscapes`}>Hardscapes</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/designerWalls`}>Designer Walls</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/rockGardens`}>Rock Gardens</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/deck`}>Deck</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/sculptures`}>Sculptures</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/pergolas`}>Pergolas</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/pavedAreas`}>PavedAreas</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/ornamentalFabrication`}>Ornamental Fabrication</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/murals`}>Murals</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/gazebo`}>Gazebo</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/pathways`}>Pathways</Link></li>
                                                </ul>
                                            </div>
                                            {/* <div className="sidebar__single sidebar__category wow animated fadeInUp" data-wow-delay="0.2s">
                                                <h3 className="sidebar__title">Services</h3>
                                                <ul className="sidebar__category-list">
                                                    <li><Link to={process.env.PUBLIC_URL + `/Hardscapes`}>Hardscapes </Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/softscapes`}>Softscapes</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/aquascapes`}>Aquascapes</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/plantLibrary`}>Plant Library</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/architect`}>Architect</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/treeReplanting`}>Tree Replanting</Link></li>
                                                </ul>
                                            </div> */}
                                            {/* End Sidebar Single */}
                                            {/* <ServiceButtonWidget />
                                            <ServiceTagsWidget />
                                            <ServiceSupportWidget /> */}
                                        </div>
                                        {/* End Sidebar */}
                                    </div>
                                    {/* End Services Details Content */}
                                </div>
                            ) : para === 'Gazebo' ? (
                                <div className="row">
                                    {/* Start Services Details Content */}
                                    <div className="col-xl-8">
                                        <div className="services-details__content">
                                            <div className="services-details__content-img1">
                                                <img src={publicUrl + "assets/images/services/gazebo-content1.png"} alt="#" />
                                            </div>

                                            <div className="text-box1">
                                                <h2>Gazebo's In Hirwai</h2>
                                                <p className="text1">At Pathways Landscaping, we specialize in designing and building custom gazebos that transform your outdoor space into a private oasis. Whether you’re looking for a peaceful spot to relax, a charming venue for outdoor gatherings, or a stylish addition to your garden, our gazebos are built to suit your unique vision and style.
                                                    A gazebo not only provides beauty and elegance but also offers functionality and comfort, allowing you to enjoy your garden, patio, or backyard through all seasons. Let us help you create the perfect space to relax, entertain, and enjoy nature.</p>
                                                <p>Certainly! Below is an example of website content for Gazebo services in landscaping. This content can be added to a page on your landscaping website to showcase your expertise in designing and installing custom gazebos.</p><br />

                                                <h5>Outdoor Entertainment Space</h5>
                                                <p>A gazebo offers a sheltered spot for hosting outdoor events, family gatherings, and intimate dinners. Whether it’s a birthday party, barbecue, or casual get-together, a gazebo provides a comfortable space that encourages socializing and relaxation.
                                                    Aesthetic Appeal A well-designed gazebo can elevate the visual appeal of your entire outdoor space. Its elegant structure provides a focal point that adds beauty and charm to your garden, creating a peaceful retreat that complements your home’s architectural style.</p>
                                                <ul>

                                                </ul>
                                            </div>




                                            <div className="services-details__content-img2">
                                                <img src={publicUrl + "assets/images/services/gazebo-content2.png"} alt="#" />
                                            </div>

                                            <div className="text-box3">
                                                <h5>Increased Property Value</h5>
                                                <p>Investing in a high-quality gazebo can increase the value of your home. It adds both aesthetic appeal and functional space, making your property more attractive to potential buyers.</p>

                                            </div>


                                            <div className="text-box4">
                                                <div className="img-box">
                                                    <img src={publicUrl + "assets/images/services/gazebo-content-small.png"} alt="#" />
                                                </div>

                                                <div className="content-box">
                                                    <h5>Year-Round Use</h5>
                                                    <p>With the right design, a gazebo can be used throughout the year. In the warmer months, it provides a cool, shaded area for relaxation. In colder weather, it can serve as a cozy retreat with the addition of heating or privacy curtains, allowing you to enjoy your outdoor space year-round.</p>
                                                </div>

                                            </div><br />

                                            <div >

                                                <br /><h5>Our Gazebo Services:</h5><br />
                                                <h6>Custom Gazebo Design
                                                </h6>
                                                <p>Every yard is unique, and your gazebo should reflect that. We offer custom gazebo designs that fit seamlessly into your landscape and suit your personal style. Our experienced designers work closely with you to understand your needs and create a design that works perfectly within the space, whether you want a classic, rustic feel or something more modern and contemporary.</p>

                                                <h6>Gazebo Installation</h6>
                                                <p>Once the design is finalized, our skilled team of professionals will handle the installation process from start to finish. We ensure that the gazebo is built with quality craftsmanship and materials that will stand the test of time.</p>

                                                <h6>Gazebo Repair and Restoration</h6>
                                                <p>If your gazebo has seen better days, don’t worry! We offer repair and restoration services to restore your gazebo to its original beauty. Whether it's replacing damaged wood, fixing structural issues, or refreshing the paint, our team can bring new life to your gazebo, making it a centerpiece of your yard once again.</p>

                                                <h6>Gazebo Maintenance</h6>
                                                <p>To ensure your gazebo stays beautiful and functional, we offer regular maintenance services. This includes cleaning, painting or staining, re-sealing, and inspecting for any structural damage. Regular maintenance can help extend the life of your gazebo and keep it in excellent condition year-round.</p>

                                                <h6>Variety of Styles</h6>
                                                <p>We offer a variety of designs, from classic Victorian and rustic country styles to more modern, minimalist gazebos. You can choose materials, colors, and finishes that perfectly complement your existing landscape or home exterior.</p>

                                                <h6>Foundation Preparation</h6>
                                                <p>We ensure the foundation is solid and level, preventing any future issues with stability. Depending on the site conditions, we may use concrete, gravel, or pavers to create a foundation that will last for years.</p>
                                            </div>




                                            <div className="faq-two__accordion faq-two__accordion--services">
                                                <h5> Why Choose Pathways Landscaping for Your Gazebo?</h5><br />
                                                <ul className="accordion-box">
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Expert Craftsmanship
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Our team is highly skilled in the construction of custom gazebos. We focus on quality craftsmanship, ensuring that every detail is carefully executed. We use only the finest materials to guarantee that your gazebo is built to last. </p>
                                                        </div>
                                                    </li>

                                                    <li className="accordion block active-block">
                                                        <div className="acc-btn active">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Custom Designs to Match Your Style
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content current">
                                                            <p>We believe that your outdoor space should reflect your unique style. Our design team works with you to create a gazebo that fits your landscape, whether you prefer a traditional wooden structure or a more modern design with sleek lines and a contemporary finish.</p>
                                                        </div>
                                                    </li>

                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Durability and Functionality
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Gazebos are a long-term investment. We build with high-quality materials that can withstand the elements, ensuring your gazebo is both durable and functional for years to come. Whether you want a shaded area to relax or a weatherproof outdoor entertainment space, our gazebos are designed to meet your needs.</p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Seamless Integration
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>We consider the overall landscape and environment when designing your gazebo, ensuring it complements your garden, patio, or backyard. Our designs blend seamlessly with the surroundings, adding value and charm to your outdoor area.</p>
                                                        </div>
                                                    </li>
                                                </ul><br /><br /><br />

                                                <h5> Frequently Asked Questions (FAQs)</h5><br />
                                                <ul className="accordion-box">
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                How long does it take to build a custom gazebo?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>The timeline for building a custom gazebo varies depending on the complexity of the design and the size of the structure. On average, a gazebo can take anywhere from 1 week to 3 weeks to complete, including design, material procurement, and installation. We provide a more accurate timeline during the initial consultation.</p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Can I customize the design of my gazebo?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Yes! Custom design is one of our specialties. We work closely with each client to create a gazebo that fits seamlessly into their landscape and matches their personal style. You can customize the size, shape, material, roof style, and even add features like benches, lighting, and privacy screens.</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Do I need to have a permit for building a gazebo?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Permit requirements can vary depending on your local regulations and the size of the gazebo. Generally, if your gazebo exceeds a certain size or is being placed in a specific area (like near property lines), you may need a permit. We can help you check local zoning laws and assist in acquiring permits if necessary.</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Can I add electrical outlets or lighting to my gazebo?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Yes! We offer the option to install lighting and electrical outlets as part of the gazebo design. Whether you want ambient lighting for evening relaxation or outlets for convenience (like a fan, speakers, or outdoor appliances), we can incorporate these features into the design and installation.</p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                What is the maintenance required for a gazebo?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Maintenance requirements depend on the materials used. For wooden gazebos, we recommend periodic staining or painting every 2-3 years to protect against weathering. Vinyl and metal gazebos are generally low-maintenance and require occasional cleaning with soap and water. We offer ongoing maintenance services, including staining, painting, and cleaning, to keep your gazebo in top condition.</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                How much does it cost to build a gazebo?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>The cost of building a gazebo depends on factors such as the size, design complexity, materials, and location. Small, basic gazebos may start around $3,000, while larger or custom-designed structures can go upwards of $10,000 or more. We provide a detailed estimate based on your specific needs and preferences after a consultation.</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Start Sidebar */}
                                    <div className="col-xl-4">
                                        <div className="sidebar">
                                            <ServiceSearchWidget />
                                            {/* Start Sidebar Single */}
                                            <div className="sidebar__single sidebar__category wow animated fadeInUp" data-wow-delay="0.2s">
                                                <h3 className="sidebar__title">Services</h3>
                                                <ul className="sidebar__category-list">
                                                    <li className="active"><Link to={process.env.PUBLIC_URL + `/hardscapes`}>Hardscapes</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/designerWalls`}>Designer Walls</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/rockGardens`}>Rock Gardens</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/deck`}>Deck</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/sculptures`}>Sculptures</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/pergolas`}>Pergolas</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/pavedAreas`}>PavedAreas</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/ornamentalFabrication`}>Ornamental Fabrication</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/murals`}>Murals</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/gazebo`}>Gazebo</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/pathways`}>Pathways</Link></li>
                                                </ul>
                                            </div>
                                            {/* <div className="sidebar__single sidebar__category wow animated fadeInUp" data-wow-delay="0.2s">
                                                <h3 className="sidebar__title">Services</h3>
                                                <ul className="sidebar__category-list">
                                                    <li><Link to={process.env.PUBLIC_URL + `/Hardscapes`}>Hardscapes </Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/softscapes`}>Softscapes</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/aquascapes`}>Aquascapes</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/plantLibrary`}>Plant Library</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/architect`}>Architect</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/treeReplanting`}>Tree Replanting</Link></li>
                                                </ul>
                                            </div> */}
                                            {/* End Sidebar Single */}
                                            {/* <ServiceButtonWidget />
                                            <ServiceTagsWidget />
                                            <ServiceSupportWidget /> */}
                                        </div>
                                        {/* End Sidebar */}
                                    </div>
                                    {/* End Services Details Content */}
                                </div>
                            ) : para === 'Murals' ? (
                                <div className="row">
                                    {/* Start Services Details Content */}
                                    <div className="col-xl-8">
                                        <div className="services-details__content">
                                            <div className="services-details__content-img1">
                                                <img src={publicUrl + "assets/images/services/murals-content1.png"} alt="#" />
                                            </div>

                                            <div className="text-box1">
                                                <h2>Murals In Hirwai</h2>
                                                <p className="text1">At Pathways Landscaping, we believe in adding artistic touches to your outdoor spaces to make them truly one-of-a-kind. Our mural design and installation services bring vibrant colors, textures, and themes to your landscape, whether it's a focal point for a garden, a boundary wall, or a creative element for your patio or outdoor living area. A mural can turn an ordinary outdoor space into a breathtaking work of art, adding character and style to your garden, courtyard, or backyard.</p>
                                                <p>Certainly! Below is an example of website content for Mural services in landscaping, which highlights your expertise in incorporating murals into landscaping designs. This will showcase how murals can enhance outdoor spaces, creating unique and personalized environments.</p><br />

                                                <h5>Unique Artistic Expression</h5>
                                                <p>A mural is a way to express your personality and creativity, adding a personal touch to your garden, patio, or backyard. Whether it’s a whimsical design or a serene natural scene, a mural brings a unique artistic element that no other decoration can replicate.
                                                    integrate seamlessly with the surrounding elements like plants, pathways, and structures, enhancing the beauty and ambiance of your garden or outdoor</p>
                                                <ul>

                                                </ul>
                                            </div>




                                            <div className="services-details__content-img2">
                                                <img src={publicUrl + "assets/images/services/murals-content2.png"} alt="#" />
                                            </div>

                                            <div className="text-box3">
                                                <h5>Enhances the Aesthetic of Your Landscape</h5>
                                                <p>Murals can significantly elevate the visual appeal of your outdoor space. Whether you’re looking to create a focal point, bring color to a dull wall, or add depth to a small garden, murals bring an artistic touch that enhances the overall look and feel of your landscape.</p>

                                            </div>


                                            <div className="text-box4">
                                                <div className="img-box">
                                                    <img src={publicUrl + "assets/images/services/murals-content-small.png"} alt="#" />
                                                </div>

                                                <div className="content-box">
                                                    <h5>Adds Value to Your Property</h5>
                                                    <p>Adding a beautifully crafted mural to your garden or outdoor space can increase the curb appeal of your property. It not only enhances the aesthetic but also makes your space more inviting and memorable, which can be a great selling point if you decide to put your home on the market.</p>
                                                </div>

                                            </div><br />

                                            <div >

                                                <br /><h5>Our Mural Services:</h5><br />
                                                <h6>Custom Mural Design</h6>
                                                <p>A mural is more than just a painting; it’s an expression of your personality and a reflection of your unique space. Our custom mural design services focus on creating art that aligns with the style of your outdoor environment. Whether you envision a nature-inspired scene, a modern abstract design, or something that tells a personal story, our talented artists will work closely with you to develop a design that enhances your landscape.</p>

                                                <h6>Murals for Garden Features</h6>
                                                <p>Murals aren’t just for walls! We can also create murals for garden features like planter boxes, benches, or even fountains. Adding a mural to a functional element of your landscape can make your garden truly unique. These murals can add a layer of color and artistry to your garden decor, turning ordinary items into standout pieces that catch the eye.</p>

                                                <h6>Murals for Privacy Fencing and Walls</h6>
                                                <p>One of the most popular uses of murals in landscaping is on privacy fences and walls. A well-designed mural can turn a plain or mundane fence into a beautiful, engaging feature that adds privacy and character to your yard. Whether you want a serene landscape scene, a tropical theme, or a more abstract design, we can bring your fence to life with stunning artwork that elevates your outdoor space.</p>

                                                <h6>Themed Murals for Special Areas</h6>
                                                <p>Whether you have a Zen garden, a children’s play area, or a meditative outdoor retreat, murals can enhance the mood and theme of any space. We specialize in creating themed murals that perfectly align with your vision, creating a cohesive atmosphere that brings your outdoor living areas to life. Imagine a forest scene for a nature-themed garden or a tropical mural for a poolside paradise.</p>

                                                <h6>Mural Restoration and Maintenance</h6>
                                                <p>Existing murals can fade over time, especially with exposure to outdoor elements. If your mural has lost its vibrancy or has sustained damage, we offer restoration and touch-up services to bring your mural back to life. Our team can also perform maintenance services, ensuring that your mural stays vibrant and well-protected for years to come.</p>

                                                <h6>Mural Installation</h6>
                                                <p>Once the design is finalized, we handle the installation process from start to finish. Our professional team ensures that the mural is applied with precision, using high-quality, weather-resistant paints and materials that can withstand the elements. We follow a thorough installation  process Surface Preparation,Detailed Application and Sealing</p>

                                            </div>




                                            <div className="faq-two__accordion faq-two__accordion--services">
                                                <h5> Why Choose Pathways Landscaping for Your Mural Project?</h5><br />
                                                <ul className="accordion-box">
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Expert Artists and Designers
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Our team of professional artists has years of experience in mural painting. We bring expertise in various styles, from classical to contemporary, and can adapt to your specific preferences, ensuring that the artwork blends perfectly with your outdoor space.</p>
                                                        </div>
                                                    </li>

                                                    <li className="accordion block active-block">
                                                        <div className="acc-btn active">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Custom Designs Tailored to Your Space
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content current">
                                                            <p>Every outdoor space is unique, and so is every mural we create. We focus on personalization, ensuring that each mural design fits your style, enhances your landscape, and reflects your personality.</p>
                                                        </div>
                                                    </li>

                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Durable, Weather-Resistant Materials
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Outdoor murals are exposed to the elements, which is why we use only high-quality, weather-resistant paints and sealants that ensure the longevity and vibrancy of the artwork. Whether it’s sun, rain, or snow, your mural will remain as beautiful as the day it was painted.</p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Seamless Integration with Landscape
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>We don’t just paint a mural on any surface; we take the time to consider your entire landscape. Our murals are designed to integrate seamlessly with the surrounding elements like plants, pathways, and structures, enhancing the beauty and ambiance of your garden or outdoor area.</p>
                                                        </div>
                                                    </li>
                                                </ul><br /><br /><br />

                                                <h5> Frequently Asked Questions (FAQs)</h5><br />
                                                <ul className="accordion-box">
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                How long does it take to create and install a mural?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Adding a mural to your landscape enhances the visual appeal and uniqueness of your outdoor area. It can transform an ordinary wall, fence, or garden feature into a vibrant work of art. Murals allow for personal expression, whether it's through nature-inspired scenes, abstract designs, or thematic artworks. They also increase the overall value of your property, providing a lasting visual impact that’s both memorable and engaging.</p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Can I customize the design of my mural?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Absolutely! We specialize in custom murals, and we work with you to create a design that reflects your personal style and complements your outdoor space. Whether you want a nature scene, abstract art, or a personalized theme, our artists will design something uniquely suited to your vision and the overall aesthetic of your garden or outdoor area.</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                How long does it take to complete a mural?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>The time it takes to complete a mural depends on factors such as the size, complexity of the design, and the surface to be painted. On average, a mural can take anywhere from a few days to two weeks. We provide a more accurate timeline during the consultation process, based on the specific details of your project.</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Do you offer any guarantees for the durability of the mural?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Yes! We use high-quality, weather-resistant paints and apply a protective sealant to the mural after installation to ensure it withstands outdoor conditions. Our murals are designed to last for many years, even in changing weather conditions. With proper care and maintenance, the mural will retain its vibrant colors and appeal for a long time. </p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                How do you prepare the surface for the mural?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Surface preparation is a key part of the mural process. We begin by thoroughly cleaning the surface to remove dirt, debris, and any existing peeling paint. We may also prime the surface to ensure the paint adheres properly, especially if the wall or surface is rough or porous. Proper preparation ensures that the mural lasts longer and remains vibrant.</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Can I request a theme or specific design for the mural?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Yes! We encourage clients to share their ideas, themes, or inspirations for the mural. Whether it’s a floral design, tropical landscape, or a personalized graphic, we can incorporate your vision into the design. We also provide expert guidance to help refine your ideas and make sure the mural blends seamlessly with your outdoor space.</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Start Sidebar */}
                                    <div className="col-xl-4">
                                        <div className="sidebar">
                                            <ServiceSearchWidget />
                                            {/* Start Sidebar Single */}
                                            <div className="sidebar__single sidebar__category wow animated fadeInUp" data-wow-delay="0.2s">
                                                <h3 className="sidebar__title">Services</h3>
                                                <ul className="sidebar__category-list">
                                                    <li className="active"><Link to={process.env.PUBLIC_URL + `/hardscapes`}>Hardscapes</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/designerWalls`}>Designer Walls</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/rockGardens`}>Rock Gardens</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/deck`}>Deck</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/sculptures`}>Sculptures</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/pergolas`}>Pergolas</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/pavedAreas`}>PavedAreas</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/ornamentalFabrication`}>Ornamental Fabrication</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/murals`}>Murals</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/gazebo`}>Gazebo</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/pathways`}>Pathways</Link></li>
                                                </ul>
                                            </div>
                                            {/* End Sidebar Single */}
                                            {/* <ServiceButtonWidget />
                                            <ServiceTagsWidget />
                                            <ServiceSupportWidget /> */}
                                        </div>
                                        {/* End Sidebar */}
                                    </div>
                                    {/* End Services Details Content */}
                                </div>
                            ) : para === 'Ornamental Fabrication' ? (
                                <div className="row">
                                    {/* Start Services Details Content */}
                                    <div className="col-xl-8">
                                        <div className="services-details__content">
                                            <div className="services-details__content-img1">
                                                <img src={publicUrl + "assets/images/services/of-content1.png"} alt="#" />
                                            </div>

                                            <div className="text-box1">
                                                <h2>Ornamental Fabrication In Hirwai</h2>
                                                <p className="text1">At Pathways Landscaping, we specialize in ornamental fabrication that adds both beauty and functionality to your landscape. Our custom-designed metalwork—including gates, fences, trellises, arches, sculptures, and more—can transform your outdoor environment into a stunning masterpiece. Ornamental elements are not just decorative; they bring unique charm and sophistication to any landscape, giving your garden or outdoor living space a touch of elegance and style.
                                                    Whether you're looking to add a wrought-iron gate, a decorative garden trellis, or a custom fire pit, our team of skilled artisans creates high-quality ornamental pieces that are as durable as they are beautiful.</p>
                                                <p>Certainly! Below is an example of website content for Ornamental Fabrication services in landscaping. This content emphasizes the custom design, craftsmanship, and impact of ornamental elements that can enhance outdoor spaces.</p><br />

                                                <h5>Increased Property Value</h5>
                                                <p>High-quality ornamental fabrication adds value to your property by improving the curb appeal and overall aesthetic of your home. Custom features like metal gates, sculptures, and trellises help set your property apart from others, making it more attractive to potential buyers.

                                                    Whatever your style preference may be, we'll help bring your vision to life with the right materials and design.</p>
                                                <ul>

                                                </ul>
                                            </div>




                                            <div className="services-details__content-img2">
                                                <img src={publicUrl + "assets/images/services/of-content2.png"} alt="#" />
                                            </div>

                                            <div className="text-box3">
                                                <h5>Aesthetic Appeal</h5>
                                                <p>Ornamental pieces such as gates, fences, and garden sculptures instantly enhance the beauty of your landscape, providing artistic flair and charm. They create focal points that draw attention, adding sophistication and elegance to your outdoor spaces.</p>

                                            </div>


                                            <div className="text-box4">
                                                <div className="img-box">
                                                    <img src={publicUrl + "assets/images/services/of-content-small.png"} alt="#" />
                                                </div>

                                                <div className="content-box">
                                                    <h5>Personalization</h5>
                                                    <p>Custom ornamental fabrication allows you to tailor each design to your personal tastes and the unique features of your landscape. Whether you want a traditional or modern design, we’ll create a piece that complements your style and enhances the atmosphere of your outdoor space.</p>
                                                </div>

                                            </div><br />

                                            <div >

                                                <br /><h5>Our Ornamental Fabrication Services:</h5><br />
                                                <h6>Custom Metal Gates & Fences</h6>
                                                <p>A custom metal gate or fence is often the first thing visitors see, so it’s important that it makes a statement. We offer a wide range of styles, from traditional wrought iron designs to modern minimalist metalwork. Whether you need a gate for added security, privacy, or purely decorative purposes, we can design a custom piece that complements your landscape perfectly. Our fencing solutions can be designed to match any theme, from rustic and traditional to sleek and contemporary.</p>

                                                <h6>Arches, Trellises, and Pergolas</h6>
                                                <p>Custom arches, trellises, and pergolas create focal points in your garden and provide structural support for climbing plants like roses, vines, and wisteria. These decorative elements can be built in a variety of metal finishes and design styles, adding both beauty and functionality. Imagine walking through a beautiful metal archway or lounging under the shade of a custom pergola—all with a tailored design that fits perfectly with your outdoor theme.</p>

                                                <h6>Custom Sculptures and Art</h6>
                                                <p>Our custom sculptures can add a unique, artistic touch to any corner of your outdoor space. Whether it's a modern sculpture to complement a contemporary garden or a classic bronze statue to add charm and character to a traditional landscape, we can create pieces that express your personality and style. From small sculptures to larger-than-life installations, our ornamental fabrication services make it easy to incorporate art into your landscape design.</p>

                                                <h6>Fire Pits and Outdoor Living Features</h6>
                                                <p>Add warmth and ambiance to your backyard with a custom metal fire pit or outdoor fireplace. Our ornamental fabrication includes creating metal fire features that not only serve as a functional addition to your landscape but also act as a stunning centerpiece. Whether you prefer a modern geometric design or a rustic steel fire pit, we can fabricate the perfect piece to suit your outdoor living area. Paired with custom metal seating, fireplace surrounds, or grills, these elements create a cozy and stylish gathering space.</p>

                                                <h6>Custom Railings and Balconies</h6>
                                                <p>For homes with elevated decks, patios, or stairways, our custom metal railings and balconies offer both safety and style. Designed with precision and creativity, our railings can be customized in a wide range of finishes, including powder-coated, galvanized, or rusted steel for an industrial look. Whether for staircases, balconies, or rooftop decks, our metalwork ensures strength and durability while enhancing the aesthetic appeal of your space.</p>

                                                <h6>Grills and Cooking Stations</h6>
                                                <p>Whether you prefer a modern geometric design or a rustic steel fire pit, we can fabricate the perfect piece to suit your outdoor living area. Paired with custom metal seating, fireplace surrounds, or grills, these elements create a cozy and stylish gathering space.</p>
                                            </div>




                                            <div className="faq-two__accordion faq-two__accordion--services">
                                                <h5> Why Choose  Pathways Landscaping for Ornamental Fabrication?</h5><br />
                                                <ul className="accordion-box">
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Custom Design Expertise
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>At Pathways Landscaping, we specialize in creating custom, one-of-a-kind pieces tailored specifically to your landscape. Our experienced design team works closely with you to understand your vision, ensuring the final product complements your outdoor space and matches your aesthetic preferences. </p>
                                                        </div>
                                                    </li>

                                                    <li className="accordion block active-block">
                                                        <div className="acc-btn active">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                High-Quality Craftsmanship
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content current">
                                                            <p>Our ornamental metalwork is crafted using the highest-quality materials, ensuring that each piece is durable, functional, and beautiful. Whether it’s wrought iron, steel, aluminum, or copper, we use premium metals to ensure that your custom designs stand the test of time. </p>
                                                        </div>
                                                    </li>

                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Timely and Professional Installation
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Once your custom ornamental piece is fabricated, we ensure a smooth and efficient installation. Our team handles everything from site preparation to final adjustments, ensuring that your new additions fit seamlessly into your landscape and function as intended.</p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Wide Range of Styles and Materials
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>We offer a wide variety of styles, from classic wrought iron to modern stainless steel and corten steel for a rustic, weathered look. Whatever your style preference may be, we’ll help bring your vision to life with the right materials and design choices.</p>
                                                        </div>
                                                    </li>
                                                </ul><br /><br /><br />

                                                <h5> Frequently Asked Questions (FAQs)</h5><br />
                                                <ul className="accordion-box">
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                What is the benefit of adding a mural to my outdoor space?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Adding a mural to your landscape enhances the visual appeal and uniqueness of your outdoor area. It can transform an ordinary wall, fence, or garden feature into a vibrant work of art. Murals allow for personal expression, whether it's through nature-inspired scenes, abstract designs, or thematic artworks. They also increase the overall value of your property, providing a lasting visual impact that’s both memorable and engaging.</p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Can I customize the design of my mural?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Absolutely! We specialize in custom murals, and we work with you to create a design that reflects your personal style and complements your outdoor space. Whether you want a nature scene, abstract art, or a personalized theme, our artists will design something uniquely suited to your vision and the overall aesthetic of your garden or outdoor area.</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                How long does it take to complete a mural?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>The time it takes to complete a mural depends on factors such as the size, complexity of the design, and the surface to be painted. On average, a mural can take anywhere from a few days to two weeks. We provide a more accurate timeline during the consultation process, based on the specific details of your project..</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Do you offer any guarantees for the durability of the mural?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Yes! We use high-quality, weather-resistant paints and apply a protective sealant to the mural after installation to ensure it withstands outdoor conditions. Our murals are designed to last for many years, even in changing weather conditions. With proper care and maintenance, the mural will retain its vibrant colors and appeal for a long time. </p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                How do you prepare the surface for the mural?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Surface preparation is a key part of the mural process. We begin by thoroughly cleaning the surface to remove dirt, debris, and any existing peeling paint. We may also prime the surface to ensure the paint adheres properly, especially if the wall or surface is rough or porous. Proper preparation ensures that the mural lasts longer and remains vibrant.</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Can I request a theme or specific design for the mural?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Yes! We encourage clients to share their ideas, themes, or inspirations for the mural. Whether it’s a floral design, tropical landscape, or a personalized graphic, we can incorporate your vision into the design. We also provide expert guidance to help refine your ideas and make sure the mural blends seamlessly with your outdoor space.</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Start Sidebar */}
                                    <div className="col-xl-4">
                                        <div className="sidebar">
                                            <ServiceSearchWidget />
                                            {/* Start Sidebar Single */}
                                            <div className="sidebar__single sidebar__category wow animated fadeInUp" data-wow-delay="0.2s">
                                                <h3 className="sidebar__title">Services</h3>
                                                <ul className="sidebar__category-list">
                                                    <li className="active"><Link to={process.env.PUBLIC_URL + `/hardscapes`}>Hardscapes</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/designerWalls`}>Designer Walls</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/rockGardens`}>Rock Gardens</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/deck`}>Deck</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/sculptures`}>Sculptures</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/pergolas`}>Pergolas</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/pavedAreas`}>PavedAreas</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/ornamentalFabrication`}>Ornamental Fabrication</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/murals`}>Murals</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/gazebo`}>Gazebo</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/pathways`}>Pathways</Link></li>
                                                </ul>
                                            </div>
                                            {/* End Sidebar Single */}
                                            {/* <ServiceButtonWidget />
                                            <ServiceTagsWidget />
                                            <ServiceSupportWidget /> */}
                                        </div>
                                        {/* End Sidebar */}
                                    </div>
                                    {/* End Services Details Content */}
                                </div>
                            ) : para === 'Paved Areas' ? (
                                <div className="row">
                                    {/* Start Services Details Content */}
                                    <div className="col-xl-8">
                                        <div className="services-details__content">
                                            <div className="services-details__content-img1">
                                                <img src={publicUrl + "assets/images/services/pa-content1.png"} alt="#" />
                                            </div>

                                            <div className="text-box1">
                                                <h2>Paved Areas In Hirwai</h2>
                                                <p className="text1">At Pathways Landscaping, we specialize in designing and installing custom paved areas that enhance the beauty and functionality of your outdoor spaces. Whether you’re looking to create a stunning patio, a smooth walkway, or a durable driveway, our expert team will craft the perfect paved surface that complements your landscape. Paving not only improves the aesthetic appeal of your yard but also provides practical benefits, such as easier maintenance and increased property value.
                                                    From driveways to garden paths to entertainment spaces, we offer a wide variety of materials, patterns, and designs to suit your style and needs.</p>
                                                <p>Certainly! Below is an example of website content for Paved Areas in Landscaping that emphasizes the importance, benefits, and customization options for paving in outdoor spaces.</p><br />

                                                <h5>Durability and Long-Lasting Solutions</h5>
                                                <p> Paving materials like stone, bricks, and concrete are built to withstand the test of time. Unlike gravel or grass, paved areas don’t require constant upkeep, offering you a low-maintenance solution for your outdoor surfaces.
                                                    From custom patios and walkways to driveways and pool decks, we offer expert design and installation services tailored</p>
                                                <ul>

                                                </ul>
                                            </div>




                                            <div className="services-details__content-img2">
                                                <img src={publicUrl + "assets/images/services/pa-content2.png"} alt="#" />
                                            </div>

                                            <div className="text-box3">
                                                <h5>Improved Aesthetic Appeal</h5>
                                                <p>Paved surfaces elevate the look of your outdoor space by adding structure and style. Whether it’s a winding garden path, a sleek modern patio, or a classic brick driveway, paving creates visually striking designs that add character and charm.</p>

                                            </div>


                                            <div className="text-box4">
                                                <div className="img-box">
                                                    <img src={publicUrl + "assets/images/services/pa-content-small.png"} alt="#" />
                                                </div>

                                                <div className="content-box">
                                                    <h5>Increased Functionality</h5>
                                                    <p> Paved areas help organize and define your landscape, creating safe and accessible paths, smooth driveways, and practical outdoor living spaces. Whether you’re creating an outdoor dining area or adding a clear route through your garden, paved surfaces add both convenience and style.</p>
                                                </div>

                                            </div><br />

                                            <div >

                                                <br /><h5>Our Paved Area Services:</h5><br />
                                                <h6>Custom Patios and Outdoor Living Spaces</h6>
                                                <p>A beautifully paved patio can serve as the perfect backdrop for outdoor living. Whether you envision a relaxing retreat, a dining area, or a social gathering space, our custom patios are designed to maximize both comfort and style. We offer various paving materials, including stone, brick, pavers, and concrete, to create a space that matches your vision and enhances your landscape’s overall look.</p>

                                                <h6>Walkways and Pathways</h6>
                                                <p>Pathways add both beauty and function to your garden or yard. A paved walkway not only guides visitors through your landscape but also keeps your feet clean and dry while walking through your garden. Our walkways are designed to complement your outdoor aesthetics while providing a safe and stable surface for foot traffic. Choose from a range of materials such as flagstone, cobblestone, brick, or decorative pavers to suit your garden’s design.</p>

                                                <h6>Driveways and Carports</h6>
                                                <p>Your driveway is one of the first things visitors notice when they approach your home, and a well-paved driveway can significantly improve your property’s curb appeal. Whether you prefer a more classic look with brick or stone pavers or a sleek modern finish with stamped concrete, we’ll design and install a driveway that enhances the appearance and functionality of your front yard. We also specialize in paved carports and parking areas for added convenience.</p>

                                                <h6>Outdoor Steps and Stairs</h6>
                                                <p>For multi-level landscapes, custom outdoor steps are an essential element that ensures both style and safety. Our paved steps can be designed in a variety of materials to match your landscape, creating a smooth transition between different levels of your garden or yard. Whether it's a simple set of steps to access your deck or a more elaborate stairway to enhance the design of your backyard, we can craft a beautiful and functional solution.</p>

                                                <h6>Pool Decks and Surrounds</h6>
                                                <p>A paved pool deck is not only visually appealing but also practical, providing a slip-resistant surface that’s ideal for wet areas. We offer a variety of paving materials suitable for pool areas, such as travertine, natural stone, and porous pavers, which are designed to stay cool underfoot while being durable and easy to maintain. Our designs ensure your pool deck blends seamlessly into the surrounding landscape while offering comfort and functionality.</p>

                                                <h6>Driveway and Patio Edging</h6>
                                                <p>The edging around your paved areas adds a finishing touch that can enhance the design and functionality of your paved surfaces. Our custom driveway and patio edging can be crafted using materials that match your paving, such as stone, brick, or metal. Proper edging helps to keep your paving intact and prevents erosion while giving your outdoor space a clean and polished look.</p>
                                            </div>




                                            <div className="faq-two__accordion faq-two__accordion--services">
                                                <h5> Why Choose Pathways Landscaping for Paved Areas</h5><br />
                                                <ul className="accordion-box">
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                High-Quality Materials
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>We use only premium paving materials that are durable, long-lasting, and visually appealing. From natural stone to modern pavers, our materials are selected for their aesthetic value and ability to withstand the elements. </p>
                                                        </div>
                                                    </li>

                                                    <li className="accordion block active-block">
                                                        <div className="acc-btn active">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Expert Design and Installation
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content current">
                                                            <p>Our experienced design team works closely with you to create the perfect paving layout that fits your outdoor space and complements your existing landscaping. Our skilled installation crew ensures that each paver is placed with precision and care, resulting in a flawless, long-lasting paved surface.</p>
                                                        </div>
                                                    </li>

                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Custom Solutions
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>No two landscapes are the same, and we pride ourselves on offering customized paving solutions. Whether you need a simple walkway or an expansive patio, we tailor our services to suit your space, style, and budget.</p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Increased Curb Appeal
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Paved areas can significantly boost the curb appeal of your home. A well-paved driveway, patio, or walkway enhances the aesthetic of your property and adds a refined and professional look, increasing its overall value.</p>
                                                        </div>
                                                    </li>
                                                </ul><br /><br /><br />

                                                <h5> Frequently Asked Questions (FAQs)</h5><br />
                                                <ul className="accordion-box">
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                What types of materials can be used for paved areas?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>We offer a wide variety of materials for paved areas, including natural stone, brick pavers, concrete, flagstone, cobblestone, and porous pavers. Each material has its own benefits, and we work closely with you to choose the one that best fits your style, functionality, and budget. Whether you prefer a rustic look or a modern finish, we have the perfect material for your outdoor space.</p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                How long does it take to install paved areas?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>The installation time for paved areas depends on the size and complexity of the project. Typically, a small walkway or patio may take a few days to complete, while larger projects like driveways or extensive patios may take a week or more. We’ll provide you with a detailed timeline during the consultation to give you a clear idea of when the work will be completed</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Are paved areas low maintenance?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Yes, paved areas are very low maintenance compared to other surfaces like grass or gravel. Once installed, they require minimal upkeep. Regular cleaning with a hose or pressure washer will keep your paved surfaces looking great, and resealing every few years can help protect the material from weather damage. Additionally, paved areas don’t require mowing or weeding, making them a hassle-free option for your outdoor space.</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Can paved areas be customized to suit my design preferences?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Absolutely! One of the major benefits of paved areas is the ability to fully customize the design. From the type of material to the pattern and layout, we offer countless design options to fit your vision. Whether you want a classic herringbone pattern, circular patio design, or a more organic, flowing path, we can create a unique paved area that enhances the overall look of your landscape.</p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Will the paving material withstand weather conditions?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Yes, the paving materials we use are durable and weather-resistant. Whether it’s rain, snow, or extreme heat, our materials are designed to handle a variety of conditions without cracking or fading. We also offer porous paving options that allow rainwater to drain properly, preventing water pooling or erosion.</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Do you provide a warranty for the paving work?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Yes, we offer warranties on our paving installations to ensure your peace of mind. The specifics of the warranty depend on the materials used and the scope of the project. Our team will discuss the warranty details with you during the consultation to ensure that you are fully informed.</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Start Sidebar */}
                                    <div className="col-xl-4">
                                        <div className="sidebar">
                                            <ServiceSearchWidget />
                                            {/* Start Sidebar Single */}
                                            <div className="sidebar__single sidebar__category wow animated fadeInUp" data-wow-delay="0.2s">
                                                <h3 className="sidebar__title">Services</h3>
                                                <ul className="sidebar__category-list">
                                                    <li className="active"><Link to={process.env.PUBLIC_URL + `/hardscapes`}>Hardscapes</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/designerWalls`}>Designer Walls</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/rockGardens`}>Rock Gardens</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/deck`}>Deck</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/sculptures`}>Sculptures</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/pergolas`}>Pergolas</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/pavedAreas`}>PavedAreas</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/ornamentalFabrication`}>Ornamental Fabrication</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/murals`}>Murals</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/gazebo`}>Gazebo</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/pathways`}>Pathways</Link></li>
                                                </ul>
                                            </div>
                                            {/* End Sidebar Single */}
                                            {/* <ServiceButtonWidget />
                                            <ServiceTagsWidget />
                                            <ServiceSupportWidget /> */}
                                        </div>
                                        {/* End Sidebar */}
                                    </div>
                                    {/* End Services Details Content */}
                                </div>
                            ) : para === 'Pergolas' ? (
                                <div className="row">
                                    {/* Start Services Details Content */}
                                    <div className="col-xl-8">
                                        <div className="services-details__content">
                                            <div className="services-details__content-img1">
                                                <img src={publicUrl + "assets/images/services/pergolas-content1.png"} alt="#" />
                                            </div>

                                            <div className="text-box1">
                                                <h2>Pergolas In Hirwai</h2>
                                                <p className="text1">At Pathways Landscaping, we specialize in designing and installing custom pergolas that bring both beauty and function to your outdoor living space. A pergola is more than just a decorative feature—it serves as an architectural element that provides shade, adds structure, and creates a perfect spot for relaxation and entertainment. Whether you want to create a charming outdoor dining area, a romantic garden nook, or a stunning focal point, our team of experts can craft a pergola that enhances the aesthetic appeal and functionality of your garden or patio.</p>
                                                <p>Certainly! Below is a detailed example of website content for Pergolas in Landscaping, designed to highlight the aesthetic, functional, and customizable aspects of pergolas in outdoor spaces.</p><br />

                                                <h5>Enhances Outdoor Living</h5>
                                                <p>A pergola creates a comfortable and visually striking outdoor area where you can entertain guests, dine, or simply relax in the fresh air. It can also serve as a focal point for your garden, making it a perfect place for gatherings or peaceful moments alone.</p>

                                                Retaining Walls
                                                Stabilize slopes and add aesthetic value to your landscape with expertly designed retaining walls. Whether you want to define garden beds or prevent erosion, our durable walls are built to last and will complement any outdoor space.
                                                <ul>

                                                </ul>
                                            </div>




                                            <div className="services-details__content-img2">
                                                <img src={publicUrl + "assets/images/services/pergolas-content2.png"} alt="#" />
                                            </div>

                                            <div className="text-box3">
                                                <h5>Increases Curb Appeal</h5>
                                                <p>A beautifully designed pergola can dramatically improve the aesthetic value of your home. Whether it’s placed over a patio, in the garden, or as part of your deck, a pergola can make your outdoor space feel more luxurious and welcoming.</p>

                                            </div>


                                            <div className="text-box4">
                                                <div className="img-box">
                                                    <img src={publicUrl + "assets/images/services/pergolas-content-small.png"} alt="#" />
                                                </div>

                                                <div className="content-box">
                                                    <h5>Provides Shade and Protection</h5>
                                                    <p>Pergolas offer a cool, shaded area to relax during sunny days while still allowing for airflow. For those who enjoy spending time outdoors but want protection from the sun, a pergola is the perfect solution.</p>
                                                </div>

                                            </div><br />

                                            <div >

                                                <br /><h5>Our Hardscape Services:</h5><br />
                                                <h6>Custom Pergola Design</h6>
                                                <p>Every home and landscape is unique, which is why we offer custom pergola designs tailored to your style and needs. Whether you prefer a traditional wooden structure or a modern, sleek design, our team will work closely with you to ensure that your pergola blends seamlessly with your outdoor space. Choose from a variety of materials, colors, and finishes to create a pergola that enhances your landscape’s overall look.</p>

                                                <h6>Pergola Installation</h6>
                                                <p>Once your design is finalized, our professional team will handle the installation process. We ensure that your pergola is built to last, using high-quality materials and expert craftsmanship. Our team will work efficiently and with minimal disruption, ensuring that your new outdoor feature is installed quickly and safely.</p>

                                                <h6>Outdoor Living Spaces with Pergolas</h6>
                                                <p>A pergola creates a beautiful and functional outdoor living space that can be enjoyed year-round. Whether you want to add a cozy seating area under the shade or build an outdoor dining space, our pergolas can be designed with additional features such as built-in seating, lighting, or even a swinging bench. The possibilities for creating a relaxing outdoor retreat are endless.</p>

                                                <h6>Pergola with Retractable Canopy</h6>
                                                <p>For those who want the flexibility to adjust the amount of shade or sun, we offer retractable canopy pergolas. These innovative structures feature a retractable roof, giving you the option to enjoy full sunlight on a clear day or shade when the weather calls for it. A retractable canopy is perfect for those who want to control the climate of their outdoor space and enjoy versatility.</p>

                                                <h6>Pergolas with Climbing Plants</h6>
                                                <p>Pergolas are perfect for showcasing your favorite climbing plants such as vines, roses, and wisteria. Over time, plants will climb up the structure, adding a lush, green aesthetic to your outdoor space. Whether you prefer a natural wood pergola that blends with the plants or a metal structure that stands out, we’ll help you create a pergola that complements your garden’s overall design.</p>

                                                <h6>Shade Structures and Privacy</h6>
                                                <p>Pergolas are perfect for providing shade and privacy in your outdoor spaces. Add privacy screens or curtains to your pergola to create a secluded retreat. With a pergola, you can transform an open patio or deck into a private oasis, perfect for relaxing or entertaining guests.</p>
                                            </div>




                                            <div className="faq-two__accordion faq-two__accordion--services">
                                                <h5> Why Choose Pathways Landscaping for Your Pergola?</h5><br />
                                                <ul className="accordion-box">
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Expert Design and Customization
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>At Pathways Landscaping, we understand that every outdoor space is different. Our team of designers will work with you to craft a custom pergola that suits your taste, complements your landscape, and meets your practical needs. Whether you want a small garden pergola or a grand patio centerpiece, we offer personalized solutions.</p>
                                                        </div>
                                                    </li>

                                                    <li className="accordion block active-block">
                                                        <div className="acc-btn active">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                High-Quality Materials and Craftsmanship
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content current">
                                                            <p>We use only the finest materials to ensure that your pergola is not only visually appealing but also durable and weather-resistant. From treated wood to powder-coated metal and composite materials, we select high-quality materials designed to withstand the elements and provide years of beauty and function.</p>
                                                        </div>
                                                    </li>

                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Seamless Installation
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Our expert team handles all aspects of the installation process, ensuring your pergola is built to perfection. We handle everything from site preparation to final touches, delivering a hassle-free experience for you.</p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Increased Property Value
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>A well-designed pergola adds value to your property by enhancing its curb appeal and creating an inviting outdoor space. Not only does it improve the overall look of your home, but it also creates a functional space that potential buyers will find attractive.</p>
                                                        </div>
                                                    </li>
                                                </ul><br /><br /><br />

                                                <h5> Frequently Asked Questions (FAQs)</h5><br />
                                                <ul className="accordion-box">
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                What is a pergola and how does it differ from a gazebo or arbor?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>A pergola is an open, freestanding outdoor structure typically made of vertical posts supporting a framework of beams and rafters, often left open to allow sunlight to filter through. Unlike a gazebo, which is fully enclosed and provides more shelter, a pergola is more open and airy, designed to provide partial shade while still allowing for airflow. An arbor is similar but usually smaller and simpler, often used to frame entryways or garden paths.</p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Can a pergola be customized to fit my specific space and style?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Yes, absolutely! At Pathways Landscaping, we specialize in designing custom pergolas to match your space and personal style. Whether you have a small backyard or a large patio, we’ll create a pergola that fits your available space perfectly. From choosing the right materials, design style, and features (like retractable canopies or climbing plant support), to considering your landscape, we ensure your pergola is tailored to your needs.</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Do you offer pergolas with retractable canopies or covers?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Yes! We offer pergolas with retractable canopies or adjustable roofs, which allow you to control the amount of shade or sun in your outdoor space. The canopy can be retracted during sunny days to enjoy full sunlight, or extended for shade and protection from rain. You can choose between motorized or manual options depending on your preferences.</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                How long does it take to build a pergola?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>The installation time for a pergola depends on the complexity and size of the design. Typically, a simple pergola may take 1 to 3 days to complete, while larger, more intricate designs may take up to a week or more. We’ll provide you with a clear timeline during the design phase, so you know exactly when to expect the project to be completed. </p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>Do I need a permit to build a pergola?</h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>In most cases, a permit may be required to build a pergola, especially if it is attached to a structure or if it exceeds certain size limits. The requirements vary depending on your local building codes and regulations. At Pathways Landscaping, we can assist you in determining whether you need a permit for your project and help handle any necessary paperwork or approvals. </p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Can you install a pergola over an existing patio or deck?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Yes! We can install a pergola over your existing patio, deck, or garden area to enhance your outdoor living space. Whether you want to cover a part of your patio or create a focal point for your deck, we can design a pergola that fits seamlessly into your existing outdoor setup. We'll ensure the structure is properly anchored and fits perfectly within the space.</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Start Sidebar */}
                                    <div className="col-xl-4">
                                        <div className="sidebar">
                                            <ServiceSearchWidget />
                                            {/* Start Sidebar Single */}
                                            <div className="sidebar__single sidebar__category wow animated fadeInUp" data-wow-delay="0.2s">
                                                <h3 className="sidebar__title">Services</h3>
                                                <ul className="sidebar__category-list">
                                                    <li className="active"><Link to={process.env.PUBLIC_URL + `/hardscapes`}>Hardscapes</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/designerWalls`}>Designer Walls</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/rockGardens`}>Rock Gardens</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/deck`}>Deck</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/sculptures`}>Sculptures</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/pergolas`}>Pergolas</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/pavedAreas`}>PavedAreas</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/ornamentalFabrication`}>Ornamental Fabrication</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/murals`}>Murals</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/gazebo`}>Gazebo</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/pathways`}>Pathways</Link></li>
                                                </ul>
                                            </div>
                                            {/* End Sidebar Single */}
                                            {/* <ServiceButtonWidget />
                                            <ServiceTagsWidget />
                                            <ServiceSupportWidget /> */}
                                        </div>
                                        {/* End Sidebar */}
                                    </div>
                                    {/* End Services Details Content */}
                                </div>
                            ) : para === 'Sculptures' ? (
                                <div className="row">
                                    {/* Start Services Details Content */}
                                    <div className="col-xl-8">
                                        <div className="services-details__content">
                                            <div className="services-details__content-img1">
                                                <img src={publicUrl + "assets/images/services/sculptures-content1.png"} alt="#" />
                                            </div>

                                            <div className="text-box1">
                                                <h2>Sculptures In Hirwai</h2>
                                                <p className="text1">At Pathways Landscaping, we believe that art should not be confined to museums or galleries—it can elevate the beauty and ambiance of your outdoor space as well. Adding a sculpture to your garden, lawn, or patio is an excellent way to introduce creativity, personality, and a striking focal point to your landscape. Whether you want a contemporary masterpiece, classical figure, or an abstract design, we specialize in helping you find the perfect sculpture to reflect your style and transform your outdoor environment.</p>
                                                <p> Certainly! Here is a detailed example of website content for Sculptures in Landscaping, focusing on how sculptures can enhance a landscape and the services offered</p><br />

                                                <h5>Metal Sculptures:</h5>
                                                <p>These sculptures offer a modern and durable design. From wrought iron to stainless steel, metal sculptures can have intricate detailing or minimalist shapes that blend seamlessly with any landscape. Their durability makes them ideal for outdoor installations.
                                                    Sculptures bring a unique and timeless quality to your outdoor spaces, making them not just beautiful, but memorable. With our expertise in selecting and placing sculptures, we can guide you in integrating them seamlessly into your landscape design.</p>
                                                <ul>

                                                </ul>
                                            </div>




                                            <div className="services-details__content-img2">
                                                <img src={publicUrl + "assets/images/services/sculptures-content2.png"} alt="#" />
                                            </div>

                                            <div className="text-box3">
                                                <h5>Stone Sculptures</h5>
                                                <p>Stone sculptures bring a timeless elegance to any garden or outdoor space. Whether it’s a classical figure, an abstract form, or a whimsical garden ornament, stone is perfect for creating a sense of permanence and strength in your landscape.</p>

                                            </div>


                                            <div className="text-box4">
                                                <div className="img-box">
                                                    <img src={publicUrl + "assets/images/services/sculptures-content-small.png"} alt="#" />
                                                </div>

                                                <div className="content-box">
                                                    <h5>Wood Sculptures</h5>
                                                    <p>Wooden sculptures can add warmth and natural beauty to your outdoor spaces. Ideal for gardens, patios, and wooded areas, wood sculptures often feature organic designs and textures that blend beautifully with nature.</p>
                                                </div>

                                            </div><br />

                                            <div >

                                                <br /><h5>Our Sculpture Services</h5><br />
                                                <h6>Custom Sculpture Design</h6>
                                                <p>We offer custom sculpture design services to create one-of-a-kind works of art that truly reflect your vision. Whether you're looking for a modern, minimalist sculpture, a whimsical garden ornament, or a grand statement piece, our team will work with you to design a sculpture that is not only visually stunning but also complements your landscape's theme and aesthetic.</p>

                                                <h6>Sculpture Installation</h6>
                                                <p>Once the perfect sculpture is chosen or designed, our experienced team will ensure that it is expertly installed in the optimal position within your landscape. We handle everything from selecting the right location to securing the sculpture for long-lasting stability and safety. Whether it's a large, heavy piece or a delicate ornament, we take great care in ensuring proper installation.</p>

                                                <h6>Sculptures for Gardens and Green Spaces</h6>
                                                <p>Adding a sculpture to your garden or green space can enhance the natural beauty of your plants and flowers. Sculptures can be placed amidst flower beds, next to ponds or fountains, or even as part of a winding garden path. We’ll help you select sculptures that bring out the best in your garden's design, creating a cohesive and visually interesting outdoor retreat.</p>

                                                <h6>Outdoor Sculptures for Patios, Pools, and Courtyards</h6>
                                                <p>Transform your patio, poolside, or courtyard into an outdoor gallery by integrating sculptures that blend form and function. Whether you want a statement focal piece for your pool area or smaller accents for your courtyard, our sculptures can create ambiance, style, and interest. We can also incorporate water features or lighting into the design to further enhance the effect of the sculptures.</p>

                                                <h6>Sculptures for Commercial Spaces and Public Gardens</h6>
                                                <p>Sculptures are an excellent way to add character and elegance to commercial spaces, such as parks, office buildings, or retail environments. We work with businesses and municipalities to create and install sculptures that reflect their brand or aesthetic vision. From small accent pieces to larger public art installations, we can help you integrate art into your commercial landscape that leaves a lasting impression.</p>

                                                <h6>Water Sculptures/Fountains</h6>
                                                <p>Combine art with functionality by adding a water sculpture or fountain to your landscape. These sculptural pieces can serve as both a visual focal point and a soothing auditory experience, perfect for patios, gardens, and poolside areas.</p>

                                            </div>




                                            <div className="faq-two__accordion faq-two__accordion--services">
                                                <h5> Why Choose Sculptures</h5><br />
                                                <ul className="accordion-box">
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Artistic Expertise
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Our team consists of skilled landscape designers and artists who understand how to integrate sculptures into any landscape. We provide personalized recommendations and thoughtful placement of your sculpture to ensure it enhances your space.</p>
                                                        </div>
                                                    </li>

                                                    <li className="accordion block active-block">
                                                        <div className="acc-btn active">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                High-Quality Materials
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content current">
                                                            <p>We only work with high-quality, durable materials for sculptures. From weather-resistant metals and long-lasting stone to sustainable wood, we ensure your sculpture is built to stand the test of time and maintain its beauty for years. </p>
                                                        </div>
                                                    </li>

                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Custom Designs
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>We work closely with you to create a custom sculpture that aligns with your tastes and vision. Whether you have a specific idea in mind or need help brainstorming creative concepts, our team is ready to help turn your ideas into reality.</p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Installation and Maintenance:
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>We take care of everything, from installation to long-term maintenance. Our team ensures that your sculpture is securely placed and properly maintained, preserving its beauty and function. We can also offer upkeep services to keep your sculpture in top condition throughout the seasons.</p>
                                                        </div>
                                                    </li>
                                                </ul><br /><br /><br />

                                                <h5> Frequently Asked Questions (FAQs)</h5><br />
                                                <ul className="accordion-box">
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Do you offer custom-designed sculptures?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Yes! We specialize in custom sculpture design. If you have a unique vision in mind, we can create a one-of-a-kind piece tailored to your specific style, space, and budget. Whether you want a custom metal artwork, a bespoke stone sculpture, or any other type of art piece, we’ll work with you to bring your idea to life.</p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                How are sculptures installed in outdoor spaces?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Sculptures are carefully installed based on the size and weight of the piece. For larger sculptures, we ensure proper anchoring and secure mounting to prevent shifting or damage over time. Our team will assess your space, recommend the ideal placement for visual impact, and ensure the sculpture is stable and well-integrated with your landscaping.</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Do I need a permit to install a sculpture in my garden or yard?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>In most cases, you may not need a permit for a small sculpture in your private garden or backyard. However, if you're placing a large sculpture in a public space, commercial property, or on a property with HOA rules, a permit may be required. We can assist you in determining whether a permit is necessary and help with any required paperwork.</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Can sculptures be incorporated into other features like water fountains or gardens?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Absolutely! Sculptures can be integrated with other outdoor features such as water fountains, ponds, gardens, and landscape lighting. Whether you want a water sculpture that combines art and functionality, or a garden sculpture nestled among your flowers and greenery, we can design and install pieces that enhance the beauty and functionality of your landscape. </p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                How much does a custom sculpture cost?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>The cost of a custom sculpture can vary depending on factors like the size, material, complexity, and installation requirements. During our consultation, we will discuss your design preferences, budget, and timeline, and provide a detailed estimate. We offer a range of options to suit different budgets while still delivering high-quality artistic pieces. </p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Can I have a sculpture that is interactive or designed for children?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Yes! We can design interactive sculptures that engage children and adults alike. From sculptures with movable parts to playful, whimsical designs like animal figures or interactive water features, we can create pieces that spark imagination and curiosity. These sculptures are perfect for family-friendly gardens, playgrounds, or even public parks.</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Start Sidebar */}
                                    <div className="col-xl-4">
                                        <div className="sidebar">
                                            <ServiceSearchWidget />
                                            {/* Start Sidebar Single */}
                                            <div className="sidebar__single sidebar__category wow animated fadeInUp" data-wow-delay="0.2s">
                                                <h3 className="sidebar__title">Services</h3>
                                                <ul className="sidebar__category-list">
                                                    <li className="active"><Link to={process.env.PUBLIC_URL + `/hardscapes`}>Hardscapes</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/designerWalls`}>Designer Walls</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/rockGardens`}>Rock Gardens</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/deck`}>Deck</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/sculptures`}>Sculptures</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/pergolas`}>Pergolas</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/pavedAreas`}>PavedAreas</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/ornamentalFabrication`}>Ornamental Fabrication</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/murals`}>Murals</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/gazebo`}>Gazebo</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/pathways`}>Pathways</Link></li>
                                                </ul>
                                            </div>
                                            {/* End Sidebar Single */}
                                            {/* <ServiceButtonWidget />
                                            <ServiceTagsWidget />
                                            <ServiceSupportWidget /> */}
                                        </div>
                                        {/* End Sidebar */}
                                    </div>
                                    {/* End Services Details Content */}
                                </div>
                            ) : para === 'Deck' ? (
                                <div className="row">
                                    {/* Start Services Details Content */}
                                    <div className="col-xl-8">
                                        <div className="services-details__content">
                                            <div className="services-details__content-img1">
                                                <img src={publicUrl + "assets/images/services/deck-content1.png"} alt="#" />
                                            </div>

                                            <div className="text-box1">
                                                <h2>Deck In Hirwai</h2>
                                                <p className="text1">A well-designed deck is the perfect addition to any outdoor space, offering a functional and stylish place for relaxation, dining, or entertaining guests. At Pathways Landscaping, we specialize in creating custom decks that seamlessly blend with your landscape while enhancing the overall aesthetic of your property. Whether you’re looking to build a simple, classic deck or a grand, multi-level structure, our team is here to bring your vision to life.</p>
                                                <p>Certainly! Here is a detailed example of website content for Deck Work in Landscaping, focusing on how decks can enhance outdoor spaces and the services offered</p><br />

                                                <h5>Expands Usable Living Space</h5>
                                                <p>One of the most significant advantages of adding a deck is the increase in living space. A deck provides you with additional square footage to enjoy the outdoors without leaving the comfort of home. This space can be used for</p>
                                                Here are some detailed points to help you understand the many reasons why investing in a deck is a smart choice for your landscaping project
                                                <ul>

                                                </ul>
                                            </div>




                                            <div className="services-details__content-img2">
                                                <img src={publicUrl + "assets/images/services/deck-content2.png"} alt="#" />
                                            </div>

                                            <div className="text-box3">
                                                <h5>Increases Property Value</h5>
                                                <p>A well-designed deck can significantly increase the resale value of your property. Potential buyers are often drawn to homes with outdoor spaces that are functional and inviting. A high-quality deck adds a return on investment (ROI) by boosting curb appeal and offering additional living space.</p>

                                            </div>


                                            <div className="text-box4">
                                                <div className="img-box">
                                                    <img src={publicUrl + "assets/images/services/deck-content-small.png"} alt="#" />
                                                </div>

                                                <div className="content-box">
                                                    <h5>Enhances Aesthetic Appeal</h5>
                                                    <p>A well-designed deck adds a visual focal point to your landscape and enhances the overall aesthetic appeal of your home. Decks can be customized to fit your unique style, making them a visually pleasing element that complements your landscaping.</p>
                                                </div>

                                            </div><br />

                                            <div >

                                                <br /><h5>Our Deck Services</h5><br />
                                                <h6>Custom Deck Design and Construction</h6>
                                                <p>We specialize in creating custom deck designs that perfectly complement your landscape. Whether you're working with a small backyard or a large estate, we can design a deck that fits your space and your lifestyle. We offer</p>

                                                <h6>Deck Material Selection</h6>
                                                <p>Choosing the right material is crucial for the durability, appearance, and maintenance of your deck. At Pathways Landscaping, we offer a variety of decking materials to match your budget, style, and long-term maintenance preferences.</p>

                                                <h6>Wooden Decks</h6>
                                                <p>Classic and natural, wood decks like cedar, redwood, or pressure-treated pine offer a timeless beauty. They may require some maintenance, such as staining and sealing, to protect them from weathering.</p>

                                                <h6>Composite Decks</h6>
                                                <p>For a low-maintenance option, composite decks are an excellent choice. Made from a blend of wood fibers and plastic, they resist fading, splintering, and warping, making them a durable, eco-friendly option.</p>

                                                <h6>PVC Decking</h6>
                                                <p>PVC decking is completely synthetic and requires very little maintenance. It’s highly resistant to moisture, insects, and rot, making it perfect for areas with high humidity or rainfall.</p>

                                                <h6>Ipe and Exotic Woods</h6>
                                                <p>For a more luxurious, durable option, exotic woods like Ipe offer a rich, deep color and exceptional longevity, ideal for high-end projects.</p>
                                            </div>




                                            <div className="faq-two__accordion faq-two__accordion--services">
                                                <h5> Why Choose Pathways Landscaping for Your Deck Work?</h5><br />
                                                <ul className="accordion-box">
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Expert Design and Installation
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Our skilled designers and installers ensure that your deck is not only functional but also visually stunning. We work with you every step of the way to ensure the deck suits your space and needs.</p>
                                                        </div>
                                                    </li>

                                                    <li className="accordion block active-block">
                                                        <div className="acc-btn active">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Quality Materials
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content current">
                                                            <p>We use only high-quality materials for our decks, ensuring durability, longevity, and minimal maintenance. We’ll help you select the right materials that fit your vision and budget.</p>
                                                        </div>
                                                    </li>

                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Customization
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Every deck we build is customized to your specifications, ensuring that it fits perfectly with your landscaping, home, and lifestyle.</p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Customer Satisfaction
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>At Pathways Landscaping, we are committed to customer satisfaction. Our goal is to exceed your expectations and provide you with a deck that enhances your outdoor living experience.</p>
                                                        </div>
                                                    </li>
                                                </ul><br /><br /><br />

                                                <h5> Frequently Asked Questions (FAQs)</h5><br />
                                                <ul className="accordion-box">
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                How long does it take to build a deck?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>The timeline for building a deck depends on several factors, including the size, complexity of the design, and weather conditions. On average, a custom deck installation may take anywhere from 1 to 3 weeks to complete. After the initial consultation, we’ll provide you with a more specific timeline based on your project.</p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Do I need a permit to build a deck?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>In most cases, yes, a permit is required to build a deck, particularly if it involves structural work, exceeds a certain height, or is located near property lines. We handle all aspects of the permit application process to ensure compliance with local building codes and regulations, so you don’t have to worry about a thing.</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Can you help design my deck?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Absolutely! Our team specializes in custom deck design. We’ll work with you to understand your vision, preferences, and how you want to use your deck. From there, we’ll create detailed designs and 3D renderings to ensure the final product is exactly what you envisioned. We’ll also consider your landscape and existing features to seamlessly integrate the deck into your outdoor space.</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Will a deck add value to my home?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Yes! A well-designed deck can significantly increase your home’s resale value. Not only does it enhance your curb appeal, but it also adds functional living space, which is highly attractive to potential buyers. Investing in a deck is a smart way to improve your property’s overall value.</p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                What size deck should I build?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>The ideal size of your deck depends on several factors, including the size of your yard, the intended use of the space, and your budget. Our designers will help you determine the perfect size based on your needs, whether it’s for entertaining, relaxation, or creating a family-friendly space.</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                How do I know if my deck is safe?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Safety is a top priority for us. Our team ensures that all decks are built according to local building codes and include necessary features like railings and staircases. We also use high-quality materials that are durable and secure. Additionally, we offer maintenance and repair services to keep your deck in safe working condition.</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Start Sidebar */}
                                    <div className="col-xl-4">
                                        <div className="sidebar">
                                            <ServiceSearchWidget />
                                            {/* Start Sidebar Single */}
                                            <div className="sidebar__single sidebar__category wow animated fadeInUp" data-wow-delay="0.2s">
                                                <h3 className="sidebar__title">Services</h3>
                                                <ul className="sidebar__category-list">
                                                    <li className="active"><Link to={process.env.PUBLIC_URL + `/hardscapes`}>Hardscapes </Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/designerWalls`}>Designer Walls</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/rockGardens`}>Rock Gardens</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/deck`}>Deck</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/sculptures`}>Sculptures</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/pergolas`}>Pergolas</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/pavedAreas`}>PavedAreas</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/ornamentalFabrication`}>Ornamental Fabrication</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/murals`}>Murals</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/gazebo`}>Gazebo</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/pathways`}>Pathways</Link></li>
                                                </ul>
                                            </div>
                                            {/* End Sidebar Single */}
                                            {/* <ServiceButtonWidget />
                                            <ServiceTagsWidget />
                                            <ServiceSupportWidget /> */}
                                        </div>
                                        {/* End Sidebar */}
                                    </div>
                                    {/* End Services Details Content */}
                                </div>
                            ) : para === 'Rock Gardens' ? (
                                <div className="row">
                                    {/* Start Services Details Content */}
                                    <div className="col-xl-8">
                                        <div className="services-details__content">
                                            <div className="services-details__content-img1">
                                                <img src={publicUrl + "assets/images/services/rg-content1.png"} alt="#" />
                                            </div>

                                            <div className="text-box1">
                                                <h2>Rock Gardens In Hirwai</h2>
                                                <p className="text1">Transform your outdoor space with the timeless beauty and charm of a rock garden. At Pathways Landscaping, we specialize in designing and creating custom rock gardens that blend seamlessly with your landscape, adding texture, structure, and a natural aesthetic. Whether you’re looking for a serene retreat or an eye-catching feature for your garden, our expert team is here to help you craft the perfect rock garden for your home.</p>
                                                <p>A rock garden is a landscaped area that utilizes natural stones, rocks, and boulders to create a visually appealing, low-maintenance outdoor space. By combining these rocks with carefully selected plants, we create a stunning contrast that enhances the beauty of your landscape. Rock gardens can be designed in various styles, from minimalist designs to lush, alpine-inspired settings.</p><br />

                                                <h5>Low Maintenance</h5>
                                                <p> Rock gardens require minimal upkeep compared to traditional flower beds or lawns. The rocks themselves serve as a natural weed deterrent, and the plants selected for the garden often need less water and care. This makes rock gardens ideal for homeowners looking for a low-maintenance landscape solution.</p>
                                                By combining these rocks with carefully selected plants, we create a stunning contrast that enhances the beauty of your landscape.
                                                <ul>

                                                </ul>
                                            </div>




                                            <div className="services-details__content-img2">
                                                <img src={publicUrl + "assets/images/services/rg-content2.png"} alt="#" />
                                            </div>

                                            <div className="text-box3">
                                                <h5>Water Efficiency</h5>
                                                <p>Many plants used in rock gardens are drought-tolerant, making them perfect for areas with water restrictions or dry climates. The natural rocks absorb and retain heat, creating a warm microclimate that encourages the growth of water-wise plants. As a result, your rock garden is both eco-friendly and water-efficient.</p>

                                            </div>


                                            <div className="text-box4">
                                                <div className="img-box">
                                                    <img src={publicUrl + "assets/images/services/rg-content-small.png"} alt="#" />
                                                </div>

                                                <div className="content-box">
                                                    <h5>Visual Appeal</h5>
                                                    <p>Rock gardens bring a striking visual element to your landscape, adding texture and contrast with the natural beauty of rocks and stones. By combining a variety of rock types and sizes with colorful, hardy plants, we can create a unique and vibrant design that complements your outdoor space.</p>
                                                </div>
                                            </div><br />

                                            <div >

                                                <br /><h5>Our Rock Garden Services:</h5><br />
                                                <h6>Custom Rock Garden Design</h6>
                                                <p>We begin every project with a custom design tailored to your property’s unique characteristics. Our design team evaluates the landscape, considers factors like slope, sunlight, soil quality, and existing features to create a rock garden that harmonizes with the natural surroundings. We use 3D modeling and CAD software to help you visualize the final result before installation.</p>

                                                <h6>Rock and Stone Selection</h6>
                                                <p>Choosing the right materials is crucial to the success of your rock garden. We offer a wide variety of rocks, boulders, and stones to fit the aesthetic and functional needs of your garden. From smooth river rocks to large statement boulders, we help you select materials that complement your landscape’s natural features.</p>

                                                <h6>Plant Selection for Rock Gardens</h6>
                                                <p>We handpick the best plants that thrive in a rock garden environment. Whether you’re looking for drought-tolerant species, alpine plants, or low-maintenance greenery, our team will choose plants that are both beautiful and suited to your climate and conditions.</p>

                                                <h6>Rock Garden Installation</h6>
                                                <p>Our team handles all aspects of the rock garden installation process, from clearing the site to arranging rocks, laying the foundation, and planting. We ensure that everything is installed to create a durable and stunning landscape.</p>

                                                <h6>Erosion Control Rock Gardens</h6>
                                                <p>If you have a sloping or eroding landscape, a rock garden can serve as a natural way to prevent soil erosion. We use rocks, boulders, and other materials to stabilize the soil, reducing runoff and protecting your garden from erosion.</p>

                                                <h6>Rock Garden Renovations and Repairs</h6>
                                                <p>If your existing rock garden is in need of updates or repairs, our team can help. Whether it’s fixing worn-out sections, replacing damaged stones, or refreshing the plantings, we offer rock garden renovation services to restore your garden to its original beauty.</p>
                                            </div>




                                            <div className="faq-two__accordion faq-two__accordion--services">
                                                <h5> Why Choose Pathways Landscaping for Your Rock Garden?</h5><br />
                                                <ul className="accordion-box">
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Expertise and Experience
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Our team has years of experience in creating custom rock gardens that fit perfectly within your landscape. We understand the best practices for stone placement, plant selection, and ensuring a sustainable, low-maintenance garden.</p>
                                                        </div>
                                                    </li>

                                                    <li className="accordion block active-block">
                                                        <div className="acc-btn active">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Custom Designs
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content current">
                                                            <p>Every rock garden we create is tailored to your space and preferences. From the selection of materials to the design layout, we ensure your rock garden reflects your unique style and enhances your property.</p>
                                                        </div>
                                                    </li>

                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>Quality Materials</h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>We use only the highest quality stones, rocks, and plants to ensure your rock garden is both beautiful and durable. Our materials are sourced from trusted suppliers to give you long-lasting results.</p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Sustainable Practices
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>We focus on sustainable landscaping practices and offer eco-friendly design options for clients who are looking to minimize their environmental footprint.</p>
                                                        </div>
                                                    </li>
                                                </ul><br /><br /><br />

                                                <h5> Frequently Asked Questions (FAQs)</h5><br />
                                                <ul className="accordion-box">
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                What is a rock garden?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>A rock garden is a landscaped area that features rocks, stones, and boulders as central elements, complemented by plants that thrive in dry, rocky conditions. It creates a natural, low-maintenance garden that adds beauty and texture to your outdoor space, making it perfect for a variety of climates and garden styles.</p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Why should I choose a rock garden for my landscape?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Rock gardens are a great choice for several reasons. They are low-maintenance, requiring less water and upkeep compared to traditional gardens. They also help with erosion control on sloped areas, and many plants used in rock gardens are drought-tolerant, making them perfect for water-conserving landscapes. Additionally, rock gardens bring a unique aesthetic appeal, providing a natural, rustic feel to your yard.</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                What types of plants can I grow in a rock garden?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Rock gardens are ideal for hardy, low-maintenance plants that thrive in well-drained soil. Some popular choices include succulents, cacti, alpine flowers, mosses, ferns, and ground covers like creeping thyme. We can help you select plants based on your specific climate, soil conditions, and aesthetic preferences.</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Can a rock garden be installed in any type of landscape?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Yes! Rock gardens can be adapted to almost any landscape, whether your yard is flat, sloped, or irregular. We specialize in designing rock gardens that suit various types of terrain, from desert-inspired designs for dry climates to woodland rock gardens with shade-loving plants. Our team will assess your space and recommend the best design for your landscape.</p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Do rock gardens require a lot of maintenance?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>No, one of the main benefits of rock gardens is their low-maintenance nature. Once installed, they require minimal care. The stones suppress weed growth, and drought-tolerant plants need little watering. However, like any garden, occasional maintenance, such as removing debris, trimming plants, and replenishing mulch, may be needed to keep it looking its best. </p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Will a rock garden help with erosion control?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Yes, rock gardens are an excellent solution for erosion control, especially on sloped terrain. The rocks and boulders help stabilize the soil and prevent it from washing away during heavy rains. Additionally, we can incorporate retaining walls and terraces into the design for added soil protection and drainage management.</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Start Sidebar */}
                                    <div className="col-xl-4">
                                        <div className="sidebar">
                                            <ServiceSearchWidget />
                                            {/* Start Sidebar Single */}
                                            <div className="sidebar__single sidebar__category wow animated fadeInUp" data-wow-delay="0.2s">
                                                <h3 className="sidebar__title">Services</h3>
                                                <ul className="sidebar__category-list">
                                                    <li className="active"><Link to={process.env.PUBLIC_URL + `/hardscapes`}>Hardscapes</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/designerWalls`}>Designer Walls</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/rockGardens`}>Rock Gardens</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/deck`}>Deck</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/sculptures`}>Sculptures</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/pergolas`}>Pergolas</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/pavedAreas`}>PavedAreas</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/ornamentalFabrication`}>Ornamental Fabrication</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/murals`}>Murals</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/gazebo`}>Gazebo</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/pathways`}>Pathways</Link></li>
                                                </ul>
                                            </div>
                                            {/* End Sidebar Single */}
                                            {/* <ServiceButtonWidget />
                                            <ServiceTagsWidget />
                                            <ServiceSupportWidget /> */}
                                        </div>
                                        {/* End Sidebar */}
                                    </div>
                                    {/* End Services Details Content */}
                                </div>
                            ) : para === 'Designer Walls' ? (
                                <div className="row">
                                    {/* Start Services Details Content */}
                                    <div className="col-xl-8">
                                        <div className="services-details__content">
                                            <div className="services-details__content-img1">
                                                <img src={publicUrl + "assets/images/services/dw-content1.png"} alt="#" />
                                            </div>

                                            <div className="text-box1">
                                                <h2>Designer Walls In Hirwai</h2>
                                                <p className="text1">At Pathways Landscaping, we specialize in creating Designer Walls that transform your outdoor spaces into works of art. Whether you’re looking to add privacy, enhance the aesthetics of your garden, or create functional barriers, our custom designer walls offer both style and functionality. From decorative stone walls to modern concrete designs, we craft walls that blend seamlessly into your landscape, creating a visually appealing and durable solution for your property.</p>
                                                <p> Designer walls are custom-built walls crafted from a variety of materials such as stone, brick, concrete, or wood, designed to enhance the beauty and functionality of your landscape. These walls are more than just structural elements; they are integral to the overall design of your outdoor space. Whether serving as retaining walls, privacy walls, or decorative features, designer walls add visual appeal while also providing practical benefits, such as erosion control, privacy, and boundary delineation.</p><br />

                                                <h5>Aesthetic Appeal</h5>
                                                <p> Designer walls elevate the visual charm of your garden or backyard. Whether you choose natural stone, sleek concrete, or rustic wood, a well-designed wall enhances the beauty of your landscape, creating depth and texture. These walls can be designed to complement your existing outdoor features, such as patios, gardens, and walkways.

                                                    Whether serving as retaining walls, privacy walls, or decorative features.</p>
                                                <ul>

                                                </ul>
                                            </div>




                                            <div className="services-details__content-img2">
                                                <img src={publicUrl + "assets/images/services/dw-content2.png"} alt="#" />
                                            </div>

                                            <div className="text-box3">
                                                <h5>Privacy and Protection</h5>
                                                <p>A designer wall can serve as a privacy barrier, shielding your outdoor space from prying eyes and unwanted noise. Whether you want to enjoy your garden in solitude or create a cozy outdoor retreat, our privacy walls help ensure your space remains peaceful and intimate.</p>

                                            </div>


                                            <div className="text-box4">
                                                <div className="img-box">
                                                    <img src={publicUrl + "assets/images/services/dw-content-small.png"} alt="#" />
                                                </div>

                                                <div className="content-box">
                                                    <h5>Functional Erosion Control</h5>
                                                    <p>For properties with sloping landscapes or areas prone to soil erosion, retaining walls are a vital addition. Designer retaining walls help prevent soil erosion, providing both a functional and visually striking solution for sloped terrains.</p>
                                                </div>

                                            </div><br />

                                            <div >

                                                <br /><h5>Our Designer Walls Services:</h5><br />
                                                <h6>Retaining Walls</h6>
                                                <p>Retaining walls are critical for properties with sloping or uneven terrain. These walls help retain soil and prevent erosion, offering both stability and aesthetic value. We design and install retaining walls that not only control erosion but also create visually stunning boundaries in your garden.</p>

                                                <h6>Privacy Walls</h6>
                                                <p>A privacy wall offers seclusion and protection from outside views. These walls are perfect for homeowners who want to create a peaceful oasis in their backyard or garden. Whether you prefer a classic or contemporary look, we provide privacy wall designs that seamlessly blend with your landscape.</p>

                                                <h6>Retaining Walls</h6>
                                                <p>Retaining walls are critical for properties with sloping or uneven terrain. These walls help retain soil and prevent erosion, offering both stability and aesthetic value. We design and install retaining walls that not only control erosion but also create visually stunning boundaries in your garden.</p>

                                                <h6>Decorative Walls</h6>
                                                <p>Make a lasting first impression with a custom driveway or paved area. Our high-quality paving solutions are designed for durability, functionality, and style, ensuring your driveway withstands the test of time.</p>

                                                <h6>Boundary Walls</h6>
                                                <p>Boundary walls mark the edges of your property, creating clear distinctions between spaces. These walls can serve as both functional dividers and aesthetic additions to your yard or garden.</p>

                                                <h6>Feature Walls</h6>
                                                <p>A feature wall acts as a statement piece in your landscape design. Whether you want a wall with a water feature, integrated lighting, or built-in plantings, feature walls create a sense of drama and focal interest.</p>
                                            </div>




                                            <div className="faq-two__accordion faq-two__accordion--services">
                                                <h5> Why Choose Pathways Landscaping for Your Designer Walls?</h5><br />
                                                <ul className="accordion-box">
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Expert Design Team
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Our landscape designers work closely with you to create custom designs that reflect your unique style and meet your specific needs.</p>
                                                        </div>
                                                    </li>

                                                    <li className="accordion block active-block">
                                                        <div className="acc-btn active">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                High-Quality Materials
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content current">
                                                            <p>We use only premium, durable materials to ensure your designer walls last for years and maintain their beauty. </p>
                                                        </div>
                                                    </li>

                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Custom Solutions
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Whether you need privacy, erosion control, or an aesthetic upgrade, we offer tailor-made solutions that suit your landscape’s requirements.</p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Full Installation Services
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p> From concept to completion, we handle every step of the process, ensuring a seamless experience from start to finish.</p>
                                                        </div>
                                                    </li>
                                                </ul><br /><br /><br />

                                                <h5> Frequently Asked Questions (FAQs)</h5><br />
                                                <ul className="accordion-box">
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                What is a designer wall in landscaping?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>A designer wall in landscaping is a custom-built structure made from materials such as stone, brick, concrete, or wood, designed to enhance the aesthetic appeal and functionality of an outdoor space. These walls can serve multiple purposes, including creating privacy, preventing erosion, adding boundaries, or simply serving as decorative features in your garden or yard.</p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                How long does it take to install a designer wall?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>The time required for installation depends on the type and complexity of the designer wall. A simple privacy wall might take a few days, while more complex designs such as retaining walls or feature walls may take a week or more. During our initial consultation, we provide an estimated timeline based on the scope of your project.</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Are designer walls low-maintenance?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Yes, most designer walls are low-maintenance, especially when constructed with durable materials such as stone, concrete, or brick. Regular cleaning and occasional sealing may be required to maintain their appearance, but these walls generally require little upkeep. We offer advice on maintaining your designer wall to ensure its longevity.</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Will the designer wall fit with my existing landscape design?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Absolutely! We take the time to understand your existing landscape design and ensure the designer wall complements it perfectly. Whether your landscape has a modern, minimalist style or a more rustic, natural look, we tailor the wall’s design to blend seamlessly with the rest of your outdoor space.</p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Are designer walls suitable for all types of landscaping?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Yes, designer walls are highly versatile and can be designed to suit any landscape. Whether you have a small urban garden, a sprawling country estate, or a property with uneven terrain, we can create a custom wall that enhances the overall design and serves your functional needs. From formal gardens to backyard retreats, we have the expertise to integrate designer walls into any outdoor space.</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                How do I get started with designing my own custom wall?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>To get started, simply contact us to schedule a consultation. During the consultation, our team will listen to your ideas, assess your landscape, and discuss the best materials and design options for your custom designer wall. We’ll work with you throughout the entire process, from initial design to final installation, to ensure your vision comes to life.</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Start Sidebar */}
                                    <div className="col-xl-4">
                                        <div className="sidebar">
                                            <ServiceSearchWidget />
                                            {/* Start Sidebar Single */}
                                            <div className="sidebar__single sidebar__category wow animated fadeInUp" data-wow-delay="0.2s">
                                                <h3 className="sidebar__title">Services</h3>
                                                <ul className="sidebar__category-list">
                                                    <li className="active"><Link to={process.env.PUBLIC_URL + `/hardscapes`}>Hardscapes </Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/designerWalls`}>Designer Walls</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/rockGardens`}>Rock Gardens</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/deck`}>Deck</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/sculptures`}>Sculptures</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/pergolas`}>Pergolas</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/pavedAreas`}>PavedAreas</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/ornamentalFabrication`}>Ornamental Fabrication</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/murals`}>Murals</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/gazebo`}>Gazebo</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/pathways`}>Pathways</Link></li>
                                                </ul>
                                            </div>
                                            {/* End Sidebar Single */}
                                            {/* <ServiceButtonWidget />
                                            <ServiceTagsWidget />
                                            <ServiceSupportWidget /> */}
                                        </div>
                                        {/* End Sidebar */}
                                    </div>
                                    {/* End Services Details Content */}
                                </div>
                            ) : para === 'Softscapes' ? (
                                <div className="row">
                                    {/* Start Services Details Content */}
                                    <div className="col-xl-8">
                                        <div className="services-details__content">
                                            <div className="services-details__content-img1">
                                                <img src={publicUrl + "assets/images/services/soft-content1.png"} alt="#" />
                                            </div>

                                            <div className="text-box1">
                                                <h2>Softscapes In Hirwai</h2>
                                                <p className="text1">
                                                    Creating engaging website content for a landscaping business focusing on softscapes is key to attracting potential clients. Here’s an example of how you can structure your website content for softscape services:
                                                    Expert Softscaping Solutions we transform outdoor spaces into lush, vibrant landscapes. Our expert softscaping services bring the beauty of nature to your property through the strategic use of plants, shrubs, trees, flowers, and more. Whether you are looking to create a serene garden.</p>
                                                <p>A lively backyard, or an elegant front yard, we have the tools, experience, and expertise to make your vision a reality.</p><br />

                                                <h5>Garden Design & Installation</h5>
                                                <p>Our landscape designers work with you to plan and install the perfect garden based on your preferences, climate, and the natural beauty of your site. From flower beds to vegetable gardens, we create beautiful spaces for relaxation and enjoyment.
                                                    Trees and shrubs are the backbone of any softscape. We carefully select and plant species that thrive in your environment while complementing the aesthetics of your landscape. From mature trees to ornamental shrubs, we provide expert planting services.
                                                </p>


                                                <ul>

                                                </ul>
                                            </div>




                                            <div className="services-details__content-img2">
                                                <img src={publicUrl + "assets/images/services/soft-content2.png"} alt="#" />
                                            </div>

                                            <div className="text-box3">
                                                <h5>Lawn Installation & Maintenance</h5>
                                                <p>
                                                    A healthy, green lawn is essential to any softscape. Whether you're starting fresh or upgrading your existing lawn, we offer seeding, sod installation, and ongoing maintenance to keep your grass lush and thriving.
                                                </p>

                                            </div>


                                            <div className="text-box4">
                                                <div className="img-box">
                                                    <img src={publicUrl + "assets/images/services/soft-content-small.png"} alt="#" />
                                                </div>

                                                <div className="content-box">
                                                    <h5>Water Features & Pond Installation</h5>
                                                    <p>
                                                        Create a tranquil, serene atmosphere with a custom-designed water feature or pond. Whether you're interested in a small fountain or a larger pond, our team will integrate a water element that complements your landscape.
                                                        Irrigation SolutionsTo ensure your plants stay healthy throughout the year.
                                                    </p>
                                                </div>

                                            </div><br />

                                            <div >

                                                <br /><h5>Our Softscaping Services:</h5><br />
                                                <h6>Garden Design & Installation</h6>
                                                <p>
                                                    Our landscape designers work with you to plan and install the perfect garden based on your preferences, climate, and the natural beauty of your site. From flower beds to vegetable gardens, we create beautiful spaces for relaxation and enjoyment.\
                                                </p>
                                                <h6>Tree & Shrub Planting</h6>
                                                <p>
                                                    Trees and shrubs are the backbone of any softscape. We carefully select and plant species that thrive in your environment while complementing the aesthetics of your landscape. From mature trees to ornamental shrubs, we provide expert planting services.
                                                </p>
                                                <h6>Lawn Installation & Maintenance</h6>
                                                <p>
                                                    A healthy, green lawn is essential to any softscape. Whether you're starting fresh or upgrading your existing lawn, we offer seeding, sod installation, and ongoing maintenance to keep your grass lush and thriving.
                                                </p>
                                                <h6>Flower Bed Design & Maintenance</h6>
                                                <p>
                                                    Add color and life to your property with vibrant flower beds. Our team will design flower beds tailored to your style and preferences, selecting seasonal and perennial blooms that complement your landscape throughout the year.
                                                </p>
                                                <h6>Mulching & Edging</h6>
                                                <p>
                                                    Mulching is essential to maintaining the health of your plants and providing a clean, polished look. We offer professional mulching services to help retain moisture, suppress weeds, and enhance your landscape’s aesthetic appeal.
                                                </p>
                                                <h6>Water Features & Pond Installation</h6>
                                                <p>
                                                    Create a tranquil, serene atmosphere with a custom-designed water feature or pond. Whether you're interested in a small fountain or a larger pond, our team will integrate a water element that complements your landscape.
                                                </p>
                                            </div>




                                            <div className="faq-two__accordion faq-two__accordion--services">
                                                <h5> Why Choose Us for Your Softscape Needs?</h5><br />
                                                <ul className="accordion-box">
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Experienced Team
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Our landscape professionals have years of experience designing and installing softscapes. We use high-quality plants and materials to ensure the longevity and health of your landscape.
                                                            </p>
                                                        </div>
                                                    </li>

                                                    <li className="accordion block active-block">
                                                        <div className="acc-btn active">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Tailored Design
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content current">
                                                            <p>
                                                                Every property is unique, which is why we offer custom softscaping solutions that reflect your style, needs, and the environmental conditions of your location.
                                                            </p>
                                                        </div>
                                                    </li>

                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Sustainable Practices
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>
                                                                We believe in using eco-friendly materials and sustainable gardening practices to ensure that your landscape is both beautiful and environmentally conscious.
                                                            </p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Attention to Detail
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>
                                                                We take pride in our meticulous approach to softscaping, paying attention to every detail to create a landscape that you will love for years to come.
                                                            </p>
                                                        </div>
                                                    </li>
                                                </ul><br /><br /><br />

                                                <h5> Frequently Asked Questions (FAQs)</h5><br />
                                                <ul className="accordion-box">
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                What is hardscaping, and how does it differ from softscaping?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>
                                                                Hardscaping refers to the non-plant elements of landscaping, including features like patios, walkways, retaining walls, decks, and stonework. It differs from softscaping, which focuses on the living, plant-based elements of a landscape. While softscaping provides greenery and natural beauty, hardscaping adds structure, functionality, and permanence to your outdoor space.
                                                            </p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                How long does it take to complete a hardscaping project?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>
                                                                The timeline for a hardscaping project depends on its size and complexity. Small projects, like installing a patio or a walkway, typically take a few days to a week. Larger, more complex projects, such as retaining walls or outdoor kitchens, may take several weeks to complete. We provide a detailed timeline after evaluating your project.
                                                            </p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Will hardscaping require a lot of maintenance?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Hardscaping features are generally low-maintenance, especially when compared to softscaping. However, periodic care is still recommended. For example, sealing pavers and stone surfaces can help preserve their appearance and prevent wear. Regular cleaning and checking for cracks or damage will help keep your features in top shape.</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Can hardscaping increase the value of my property?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Yes! Properly designed and installed hardscaping can significantly increase your home’s curb appeal and overall property value. Features like patios, outdoor kitchens, and retaining walls are attractive to potential buyers and create functional outdoor living spaces that can be enjoyed year-round. </p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                How much does a typical hardscaping project cost?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>The cost of a hardscaping project varies based on the size, materials, and complexity of the work. Simple projects like pathways or small patios may start at a lower price point, while large projects such as retaining walls or outdoor kitchens may require a larger investment. We offer free consultations and can provide an accurate estimate based on your specific needs and preferences. </p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Do I need a permit for my hardscape installation?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>In some cases, yes. Permits may be required for larger projects such as building retaining walls, installing driveways, or adding structures like pergolas or decks. We handle all the necessary paperwork and will ensure that your project complies with local regulations.</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Start Sidebar */}
                                    <div className="col-xl-4">
                                        <div className="sidebar">
                                            <ServiceSearchWidget />

                                            {/* Start Sidebar Single */}

                                            <div className="sidebar__single sidebar__category wow animated fadeInUp" data-wow-delay="0.2s">
                                                <h3 className="sidebar__title">Services</h3>
                                                <ul className="sidebar__category-list">
                                                    <li className="active"><Link to={process.env.PUBLIC_URL + `/softscapes`}>Softscapes </Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/VegetableGarden`}>Vegetable Garden</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/mounts`}>Mounts</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/spiceGarden`}>Spice Garden</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/lawnExpansion`}>Lawn Expansion</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/aromaGardens`}>Aroma Gardens</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/topiaries`}>Topiaries</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/shrubPlantation`}>Shrub Plantation</Link></li>


                                                </ul>
                                            </div>
                                            {/* End Sidebar Single */}

                                            {/* <ServiceButtonWidget />
                                            <ServiceTagsWidget />
                                            <ServiceSupportWidget /> */}
                                        </div>
                                        {/* End Sidebar */}
                                    </div>
                                    {/* End Services Details Content */}
                                </div>
                            ) : para === 'LawnExpansion' ? (
                                <div className="row">
                                    {/* Start Services Details Content */}
                                    <div className="col-xl-8">
                                        <div className="services-details__content">
                                            <div className="services-details__content-img1">
                                                <img src={publicUrl + "assets/images/services/softscape/lawn-expansion/content1.png"} alt="#" />
                                            </div>

                                            <div className="text-box1">
                                                <h2>Lawn Expansion In Hirwai</h2>
                                                <p className="text1">
                                                    At we specialize in lawn expansion services designed to turn your outdoor space into a lush, green paradise. Whether you’re looking to extend your existing lawn or create an entirely new grassy area, our expert team ensures a seamless process from start to finish. We offer professional lawn expansion solutions that enhance the beauty of your property while increasing its value.</p>
                                                <p>Whether you’re looking to extend your existing lawn or create an entirely new grassy area, our expert team ensures a seamless proces</p><br />

                                                <h5>Enhanced Curb Appeal</h5>
                                                <p>A larger, healthy lawn instantly boosts the attractiveness of your property, making it more inviting and aesthetically pleasing.
                                                </p>


                                                <ul>

                                                </ul>
                                            </div>




                                            <div className="services-details__content-img2">
                                                <img src={publicUrl + "assets/images/services/softscape/lawn-expansion/content2.png"} alt="#" />
                                            </div>

                                            <div className="text-box3">
                                                <h5>Increased Usable Space</h5>
                                                <p>
                                                    Expanding your lawn creates more room for outdoor activities, whether it's for family gatherings, kids' playtime, or relaxation.
                                                </p>

                                            </div>


                                            <div className="text-box4">
                                                <div className="img-box">
                                                    <img src={publicUrl + "assets/images/services/softscape/lawn-expansion/content-small.png"} alt="#" />
                                                </div>

                                                <div className="content-box">
                                                    <h5>Improved Environment</h5>
                                                    <p>
                                                        Lawns provide several environmental benefits, such as improving air quality, reducing carbon footprint, and preventing soil erosion.
                                                        to ensure your plants stay healthy throughout the year.
                                                    </p>
                                                </div>

                                            </div><br />

                                            <div >

                                                <br /><h5>Lawn Expansion Services</h5><br />
                                                <h6>Lawn Expansion Design & Planning</h6>
                                                <p>
                                                    We start by assessing your existing lawn and the area you want to expand. Our team takes into consideration factors such as your soil type, sunlight exposure, drainage, and overall landscape design to create a customized plan. We’ll suggest the best grass species suited for your climate and aesthetic preferences to ensure a healthy, thriving lawn.
                                                </p>
                                                <h6>Site Preparation & Soil Preparation</h6>
                                                <p>
                                                    A successful lawn expansion begins with proper site preparation. Our team will clear the area of debris, weeds, and old grass. We’ll also improve the soil quality by adding organic matter or nutrients to ensure optimal conditions for grass growth. If necessary, we’ll level the ground and grade the area to ensure proper drainage.
                                                </p>
                                                <h6>Lawn Fertilization & Maintenance</h6>
                                                <p>
                                                    After planting the grass, proper care is essential to ensure it establishes a strong root system. Our team provides post-installation care services, including fertilization, watering schedules, and weed control. We’ll monitor the new lawn’s progress and provide regular maintenance to keep it healthy and thriving.
                                                </p>
                                                <h6>Irrigation Solutions</h6>
                                                <p>
                                                    A new lawn needs consistent watering to establish roots. If your lawn expansion area lacks a proper irrigation system, we can install sprinklers or irrigation solutions tailored to your lawn's needs. This ensures that every part of your lawn receives adequate water without wasting resources.
                                                </p>
                                                <h6>Lawn Edging & Borders</h6>
                                                <p>
                                                    To give your expanded lawn a crisp, well-defined appearance, we offer professional lawn edging and border installation. This not only creates clean lines but also prevents grass from spilling over into flower beds, walkways, or driveways. We can use a variety of materials like brick, stone, or metal edging, depending on your aesthetic preferences.
                                                </p>
                                                <h6>Turf Repair & Restoration</h6>
                                                <p>
                                                    If your lawn has existing bare spots or areas with poor growth, we offer turf repair and restoration services. We can fill in these spots with high-quality seed or sod, ensuring a uniform and healthy lawn across the entire space. Our experts will assess the soil quality, recommend solutions, and carry out the necessary steps to restore your lawn to its full beauty.
                                                </p>
                                            </div>




                                            <div className="faq-two__accordion faq-two__accordion--services">
                                                <h5> Why Choose Lawn Expansion?</h5><br />
                                                <ul className="accordion-box">
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Expert Knowledge
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Our experienced team understands the intricacies of lawn expansion and has the expertise to handle projects of all sizes.
                                                            </p>
                                                        </div>
                                                    </li>

                                                    <li className="accordion block active-block">
                                                        <div className="acc-btn active">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Custom Solutions
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content current">
                                                            <p>
                                                                We tailor every lawn expansion project to suit your specific space, preferences, and budget, ensuring you get the best results.
                                                            </p>
                                                        </div>
                                                    </li>

                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                High-Quality Grass Varieties
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>
                                                                We work with top-quality grass seeds and sod that are well-suited to your climate and soil conditions for a lush, healthy lawn.
                                                            </p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Sustainable Practices:
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>
                                                                We use eco-friendly practices, from water-efficient irrigation systems to organic fertilizers, to create a sustainable lawn that benefits both you and the environment.
                                                            </p>
                                                        </div>
                                                    </li>
                                                </ul><br /><br /><br />

                                                <h5> Frequently Asked Questions (FAQs)</h5><br />
                                                <ul className="accordion-box">
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                How long will it take for my new lawn to grow?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>
                                                                If you choose grass seeding, it can take several weeks to a few months for the grass to fully establish, depending on the season and weather conditions. With sod installation, you’ll have an instant lawn, but it may take a few weeks for the sod to root deeply into the soil.
                                                            </p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                How much does lawn expansion cost?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>
                                                                The cost of lawn expansion depends on factors such as the size of the area, the method of installation (seeding or sod), and soil preparation needs. After an on-site consultation, we’ll provide you with an accurate estimate tailored to your specific project.
                                                            </p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Will lawn expansion affect my existing landscape?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Our team takes great care in preparing your lawn expansion area so it blends seamlessly with your existing landscape. We minimize disruption to other areas of your yard, ensuring a smooth transition between your current lawn and the new expansion.</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Do you provide maintenance services for my expanded lawn?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p> Yes, we offer ongoing lawn maintenance services, including mowing, fertilization, weed control, and irrigation management. We also provide seasonal care to keep your lawn healthy throughout the year. </p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                What type of grass is best for my lawn expansion?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>The best grass for your lawn expansion depends on your region’s climate, soil type, and how much sun your lawn receives. We’ll help you select the right variety, whether it’s a cool-season grass like Kentucky Bluegrass or a warm-season grass like Bermuda, to ensure optimal growth.</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Do I need to remove my existing lawn to expand it?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Not necessarily. If your existing lawn is healthy and there is enough space, we can simply extend your lawn by clearing debris and adding new soil for the expansion area. If there are damaged or poorly growing areas, we may recommend removing them and reseeding or re-sodding.</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Start Sidebar */}
                                    <div className="col-xl-4">
                                        <div className="sidebar">
                                            <ServiceSearchWidget />

                                            {/* Start Sidebar Single */}

                                            <div className="sidebar__single sidebar__category wow animated fadeInUp" data-wow-delay="0.2s">
                                                <h3 className="sidebar__title">Services</h3>
                                                <ul className="sidebar__category-list">
                                                    <li className="active"><Link to={process.env.PUBLIC_URL + `/softscapes`}>Softscapes </Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/VegetableGarden`}>Vegetable Garden </Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/mounts`}>Mounts</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/spiceGarden`}>Spice Garden</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/lawnExpansion`}>Lawn Expansion</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/aromaGardens`}>Aroma Gardens</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/topiaries`}>Topiaries</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/shrubPlantation`}>Shrub Plantation</Link></li>
                                                </ul>
                                            </div>
                                            {/* End Sidebar Single */}

                                            {/* <ServiceButtonWidget />
                                            <ServiceTagsWidget />
                                            <ServiceSupportWidget /> */}
                                        </div>
                                        {/* End Sidebar */}
                                    </div>
                                    {/* End Services Details Content */}
                                </div>
                            ) : para === 'AromaGardens' ? (
                                <div className="row">

                                    {/* Start Services Details Content */}
                                    <div className="col-xl-8">
                                        <div className="services-details__content">
                                            <div className="services-details__content-img1">
                                                <img src={publicUrl + "assets/images/services/softscape/aroma-gardens/content1.png"} alt="#" />
                                            </div>

                                            <div className="text-box1">
                                                <h2>AromaGardens In Hirwai</h2>
                                                <p className="text1">
                                                    At we specialize in creating Aroma Gardens that engage all of your senses with beautiful, fragrant plants that transform your outdoor space into a fragrant oasis. Imagine stepping into a garden that not only delights the eyes with vibrant colors but also fills the air with delightful scents, creating an atmosphere of peace, relaxation, and sensory bliss.
                                                    Whether you're designing a garden for your home, office, or commercial space, our experts can help you create a personalized Aroma Garden that suits your aesthetic preferences while infusing your outdoor space with the natural beauty and calming effects of aromatic plants.</p>
                                                <p>designing a garden for your home, office, or commercial space, our experts can help you create a personalized Aroma Garden that suits your aesthetic</p><br />

                                                <h5>Personalized Aroma Garden Planning</h5>
                                                <p>We start by understanding your vision for the space, whether it’s a peaceful retreat, a vibrant garden, or a scented path. Our designers will consider your outdoor space's layout, sunlight, climate, and soil conditions to choose the best aromatic plants for your garden. We’ll create a customized plan that maximizes the sensory experience while complementing your overall landscape design.
                                                </p>


                                                <ul>

                                                </ul>
                                            </div>




                                            <div className="services-details__content-img2">
                                                <img src={publicUrl + "assets/images/services/softscape/aroma-gardens/content2.png"} alt="#" />
                                            </div>

                                            <div className="text-box3">
                                                <h5>Plant Placement & Garden Layout</h5>
                                                <p>
                                                    The placement of your aromatic plants is just as important as the selection. We’ll design your garden layout to highlight the fragrances while ensuring that each plant has optimal growing conditions. Strategic placement near pathways, patios, or seating areas allows you to fully enjoy the fragrances as you move through your garden
                                                </p>

                                            </div>


                                            <div className="text-box4">
                                                <div className="img-box">
                                                    <img src={publicUrl + "assets/images/services/softscape/aroma-gardens/content-small.png"} alt="#" />
                                                </div>

                                                <div className="content-box">
                                                    <h5>Seasonal Fragrance Rotation                                                   </h5>
                                                    <p>
                                                        An Aroma Garden doesn’t have to be a one-season wonder. With the right selection of plants, you can enjoy aromatic fragrances year-round. We can create a seasonal rotation, choosing plants that bloom in different seasons. For instance
                                                    </p>
                                                </div>

                                            </div><br />

                                            <div >

                                                <br /><h5>Aroma Garden Services</h5><br />
                                                <h6>Custom Aroma Garden Design:</h6>
                                                <p>
                                                    We offer personalized design services that focus on your vision and needs, crafting an Aroma Garden that’s both visually appealing and fragrant. Our designers work closely with you to create a sensory experience that enhances your outdoor space.
                                                </p>
                                                <h6>Plant Selection & Sourcing</h6>
                                                <p>
                                                    We select the perfect aromatic plants that suit your local climate, space, and desired fragrance. From fragrant flowers to herbs, we ensure a balanced mix of plants that bloom in different seasons for year-round enjoyment.
                                                </p>
                                                <h6>Garden Installation</h6>
                                                <p>
                                                    Our skilled team handles the complete installation process, ensuring that your Aroma Garden is planted with care, using professional techniques for optimal plant health and aesthetic appeal
                                                </p>
                                                <h6>Sustainability Focus</h6>
                                                <p>
                                                    We focus on eco-friendly practices by incorporating sustainable plants, rainwater harvesting, and organic gardening techniques. Our designs aim to reduce water consumption and maintain a healthy ecosystem.
                                                </p>
                                                <h6>Aromatic Pathways & Walkways:</h6>
                                                <p>
                                                    We design fragrant pathways and walkways within your garden, placing aromatic plants strategically to create a sensory journey as you walk through your outdoor space.
                                                </p>
                                                <h6>Fragrant Indoor Gardens:</h6>
                                                <p>
                                                    Don’t have a large outdoor space? We also specialize in creating indoor Aroma Gardens that bring fragrance and beauty into your home or office. From small container gardens to vertical installations, we create aromatic havens indoors.
                                                </p>
                                            </div>




                                            <div className="faq-two__accordion faq-two__accordion--services">
                                                <h5> Why Choose Us for Your Aroma Garden?</h5><br />
                                                <ul className="accordion-box">
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Personalized Aromatic Designs
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>We create custom Aroma Gardens that reflect your preferences, tastes, and needs, whether it's for relaxation, wellness, or aesthetic appeal.
                                                            </p>
                                                        </div>
                                                    </li>

                                                    <li className="accordion block active-block">
                                                        <div className="acc-btn active">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Expert Plant Selection
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content current">
                                                            <p>
                                                                Our team selects the best aromatic plants that thrive in your local climate, ensuring a lasting, vibrant garden.
                                                            </p>
                                                        </div>
                                                    </li>

                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Full-Service Design & Maintenance
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>
                                                                We offer complete design, installation, and maintenance services to ensure your Aroma Garden remains beautiful and aromatic year-round.
                                                            </p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Sustainability Focus
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>
                                                                We are committed to using sustainable, eco-friendly practices, so your Aroma Garden not only benefits you but the environment as well.
                                                            </p>
                                                        </div>
                                                    </li>
                                                </ul><br /><br /><br />

                                                <h5> Frequently Asked Questions (FAQs)</h5><br />
                                                <ul className="accordion-box">
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                What is the best time of year to plant an Aroma Garden?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>
                                                                The best time to plant depends on the climate of your region, but spring and fall are ideal seasons to plant most fragrant flowers and herbs. We’ll help you choose plants that are suitable for your region’s growing season.
                                                            </p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Can I have an Aroma Garden even if I don’t have a large yard?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>
                                                                Absolutely! Aroma Gardens can be created in small spaces, balconies, or even indoors. We can design a fragrant space that fits any size, from a small herb garden to a larger outdoor retreat.
                                                            </p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                How can I maintain my Aroma Garden?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>We offer full maintenance services, including pruning, fertilizing, and watering schedules. We’ll also provide tips for caring for your plants to ensure they continue to bloom and fill your space with fragrance.</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Are there any low-maintenance fragrant plants I can choose for my garden?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Yes! There are several low-maintenance fragrant plants, such as lavender, rosemary, and mint. These plants are hardy, drought-resistant, and require minimal care once established. </p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Can I enjoy my Aroma Garden during the winter?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Many aromatic plants like evergreen herbs, such as rosemary, thyme, and lavender, thrive in cooler weather and will continue to provide fragrance during winter months. We’ll help you select winter-friendly plants for year-round enjoyment. </p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Fertilization for Healthy Growth
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p> To keep your Aroma Garden thriving, it's essential to use the right fertilizers. We provide organic and eco-friendly fertilizer options to enhance the fragrance of your plants while maintaining soil health.</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Start Sidebar */}
                                    <div className="col-xl-4">
                                        <div className="sidebar">
                                            <ServiceSearchWidget />

                                            {/* Start Sidebar Single */}
                                            <div className="sidebar__single sidebar__category wow animated fadeInUp" data-wow-delay="0.2s">
                                                <h3 className="sidebar__title">Services</h3>
                                                <ul className="sidebar__category-list">
                                                <li className="active"><Link to={process.env.PUBLIC_URL + `/softscapes`}>Softscapes </Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/VegetableGarden`}>Vegetable Garden </Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/mounts`}>Mounts</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/spiceGarden`}>Spice Garden</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/lawnExpansion`}>Lawn Expansion</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/aromaGardens`}>Aroma Gardens</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/topiaries`}>Topiaries</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/shrubPlantation`}>Shrub Plantation</Link></li>
                                                </ul>
                                            </div>
                                            {/* <div className="sidebar__single sidebar__category wow animated fadeInUp" data-wow-delay="0.2s">
                                                <h3 className="sidebar__title">Services</h3>
                                                <ul className="sidebar__category-list">
                                                    <li><Link to={process.env.PUBLIC_URL + `/Hardscapes`}>Hardscapes </Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/softscapes`}>Softscapes</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/aquascapes`}>Aquascapes</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/plantLibrary`}>Plant Library</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/architect`}>Architect</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/treeReplanting`}>Tree Replanting</Link></li>
                                                </ul>
                                            </div> */}
                                            {/* End Sidebar Single */}

                                            {/* <ServiceButtonWidget />
                                            <ServiceTagsWidget />
                                            <ServiceSupportWidget /> */}
                                        </div>
                                        {/* End Sidebar */}
                                    </div>
                                    {/* End Services Details Content */}
                                </div>
                            ) : para === 'Topiaries' ? (
                                <div className="row">
                                    {/* Start Services Details Content */}
                                    <div className="col-xl-8">
                                        <div className="services-details__content">
                                            <div className="services-details__content-img1">
                                                <img src={publicUrl + "assets/images/services/softscape/topiaries/content1.png"} alt="#" />
                                            </div>

                                            <div className="text-box1">
                                                <h2>Topiaries In Hirwai</h2>
                                                <p className="text1">
                                                    At we bring creativity and artistry to your landscape with our Topiary services. Topiaries are more than just plants—they are living sculptures that can transform any outdoor space into an elegant, whimsical, or sophisticated garden. Our expert team specializes in creating beautiful, meticulously pruned shapes that add a sense of structure and elegance to your garden, offering a unique focal point that stands out.
                                                    Whether you’re looking to add a classic topiary for a formal garden, whimsical animal shapes for a children’s play area, or modern geometric forms for a contemporary landscape, we can design and create the perfect topiaries to suit your style.</p>
                                                <p>Our expert team specializes in creating beautiful, meticulously pruned shapes that add a sense of structure</p><br />

                                                <h5>Consultation & Design</h5>
                                                <p>Our design team will meet with you to understand your landscape style, desired theme, and topiary preferences. Whether you're envisioning classic round shapes, animal figures, or custom geometric forms, we’ll sketch out a design tailored to your space.
                                                </p>


                                                <ul>

                                                </ul>
                                            </div>




                                            <div className="services-details__content-img2">
                                                <img src={publicUrl + "assets/images/services/softscape/topiaries/content2.png"} alt="#" />
                                            </div>

                                            <div className="text-box3">
                                                <h5>Plant Selection</h5>
                                                <p>
                                                    Choosing the right plants for your topiaries is essential for both aesthetics and longevity. We select plants that are suitable for shaping and will thrive in your climate, such as boxwood, holly, yew, and privet. We take into account your garden’s lighting, soil, and overall environment to ensure that your topiary remains healthy and beautiful for years to come.
                                                </p>

                                            </div>


                                            <div className="text-box4">
                                                <div className="img-box">
                                                    <img src={publicUrl + "assets/images/services/softscape/topiaries/content-small.png"} alt="#" />
                                                </div>

                                                <div className="content-box">
                                                    <h5>Expert Shaping & Sculpting</h5>
                                                    <p>
                                                        Our experienced team carefully prunes and shapes your plants to create stunning, well-defined forms. Whether your vision calls for traditional, symmetrical shapes or modern, abstract designs, our experts ensure that each topiary is perfectly sculpted to bring out its full potential.
                                                    </p>
                                                </div>

                                            </div><br />

                                            <div >

                                                <br /><h5>Our Topiary Services:</h5><br />
                                                <h6>Custom Topiary Design</h6>
                                                <p>
                                                    We specialize in creating custom topiary designs tailored to your garden’s theme and style, whether it’s classic, whimsical, or modern. From geometric forms to animals and abstract shapes, we bring your vision to life with professional artistry.
                                                </p>
                                                <h6>Expert Plant Selection</h6>
                                                <p>
                                                    We carefully select the best plant varieties suited for topiary work, ensuring they thrive in your climate and landscape. Our experts choose resilient, slow-growing plants like boxwood, yew, privet, and holly, which are perfect for sculpting and maintaining elegant shapes
                                                </p>
                                                <h6>Topiary Shaping & Sculpting</h6>
                                                <p>
                                                    Our skilled team expertly shapes and sculpts your plants into the desired topiary forms. We provide meticulous pruning and sculpting to create precise, well-defined designs that are both beautiful and enduring.
                                                </p>
                                                <h6>Topiary Installation</h6>
                                                <p>
                                                    We offer professional installation services, placing your topiaries in the most optimal locations to enhance the beauty and structure of your landscape. From front entrances to garden pathways, our topiaries create striking focal points.
                                                </p>
                                                <h6>Topiary Maintenance & Care</h6>
                                                <p>
                                                    Regular trimming, pruning, and reshaping are essential to maintaining the beauty and health of your topiaries. Our ongoing maintenance services ensure that your topiaries stay in perfect form year-round with minimal effort.
                                                </p>
                                                <h6>Seasonal Topiary Pruning</h6>
                                                <p>
                                                    We provide seasonal pruning services to keep your topiaries looking fresh and sculpted. Whether it's preparing for winter or enhancing new growth in spring, we ensure that your plants stay healthy and maintain their shape.
                                                </p>
                                            </div>




                                            <div className="faq-two__accordion faq-two__accordion--services">
                                                <h5> Why Choose Us for Topiary Your Garden?</h5><br />
                                                <ul className="accordion-box">
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Unique Visual Appeal
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Topiaries add a sculptural element to your garden, creating a stunning focal point or feature. Their unique shapes can turn any garden into a masterpiece.
                                                            </p>
                                                        </div>
                                                    </li>

                                                    <li className="accordion block active-block">
                                                        <div className="acc-btn active">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Timeless Elegance
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content current">
                                                            <p>
                                                                Whether formal or playful, topiaries bring a sense of classic elegance to any space. Their structured forms create a sophisticated atmosphere that enhances the beauty of your landscape.
                                                            </p>
                                                        </div>
                                                    </li>

                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Customization
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>
                                                                Topiaries can be shaped into nearly any form—geometric patterns, animals, spirals, or even abstract designs—allowing for personalized creativity in your garden.
                                                            </p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Low Maintenance
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>
                                                                Once established, topiaries are relatively easy to care for. With regular pruning and shaping, they maintain their beauty and structure over time.
                                                            </p>
                                                        </div>
                                                    </li>
                                                </ul><br /><br /><br />

                                                <h5> Frequently Asked Questions (FAQs)</h5><br />
                                                <ul className="accordion-box">
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                What types of plants are used for topiaries?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>
                                                                Popular topiary plants include boxwood, privet, holly, yew, and juniper. These plants are chosen for their ability to tolerate pruning and their dense foliage, which is essential for shaping.
                                                            </p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                How long does it take to grow a topiary?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>
                                                                The time it takes to form a topiary depends on the size and complexity of the shape. Some designs may take several months to form, while more intricate or large topiaries may take years to fully develop.
                                                            </p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Are topiaries easy to maintain?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>While topiaries do require regular pruning to maintain their shape, they are relatively low-maintenance once established. We offer professional maintenance services to ensure your topiaries remain healthy and sculpted.</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Can topiaries be grown in pots or containers?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p> Yes! Topiaries are well-suited for containers and can be placed on patios, balconies, or small garden spaces. We offer potted topiary designs that are easy to move and maintain.</p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Do topiaries require a lot of sunlight?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Topiaries generally prefer full to partial sunlight, but the specific light requirements depend on the plant species. We’ll ensure that the topiary you choose is suited for your garden’s light conditions. </p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Expert Plant Selection?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>We carefully select the best plant varieties suited for topiary work, ensuring they thrive in your climate and landscape. Our experts choose resilient, slow-growing plants like boxwood, yew, privet, and holly, which are perfect for sculpting and maintaining elegant shapes.</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Start Sidebar */}
                                    <div className="col-xl-4">
                                        <div className="sidebar">
                                            <ServiceSearchWidget />

                                            {/* Start Sidebar Single */}
                                            <div className="sidebar__single sidebar__category wow animated fadeInUp" data-wow-delay="0.2s">
                                                <h3 className="sidebar__title">Services</h3>
                                                <ul className="sidebar__category-list">
                                                <li className="active"><Link to={process.env.PUBLIC_URL + `/softscapes`}>Softscapes </Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/VegetableGarden`}>Vegetable Garden </Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/mounts`}>Mounts</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/spiceGarden`}>Spice Garden</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/lawnExpansion`}>Lawn Expansion</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/aromaGardens`}>Aroma Gardens</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/topiaries`}>Topiaries</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/shrubPlantation`}>Shrub Plantation</Link></li>
                                                </ul>
                                            </div>
                                            {/* <div className="sidebar__single sidebar__category wow animated fadeInUp" data-wow-delay="0.2s">
                                                <h3 className="sidebar__title">Services</h3>
                                                <ul className="sidebar__category-list">
                                                    <li><Link to={process.env.PUBLIC_URL + `/Hardscapes`}>Hardscapes </Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/softscapes`}>Softscapes</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/aquascapes`}>Aquascapes</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/plantLibrary`}>Plant Library</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/architect`}>Architect</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/treeReplanting`}>Tree Replanting</Link></li>
                                                </ul>
                                            </div> */}
                                            {/* End Sidebar Single */}

                                            {/* <ServiceButtonWidget />
                                            <ServiceTagsWidget />
                                            <ServiceSupportWidget /> */}
                                        </div>
                                        {/* End Sidebar */}
                                    </div>
                                    {/* End Services Details Content */}
                                </div>
                            ) : para === 'ShrubPlantation' ? (
                                <div className="row">
                                    {/* Start Services Details Content */}
                                    <div className="col-xl-8">
                                        <div className="services-details__content">
                                            <div className="services-details__content-img1">
                                                <img src={publicUrl + "assets/images/services/softscape/shurbs-plantation/content1.png"} alt="#" />
                                            </div>

                                            <div className="text-box1">
                                                <h2>Shrub Plantation In Hirwai</h2>
                                                <p className="text1">
                                                    At we understand that shrubs are essential elements that bring structure, beauty, and functionality to any landscape. Whether you are looking to enhance your garden’s aesthetics, create natural privacy screens, or add vibrant color to your outdoor spaces, our Shrub Plantation Services are tailored to meet your needs.
                                                    From selecting the perfect shrub species to professional planting and long-term care, we handle every step of the shrub planting process to ensure your landscape thrives. Our experienced team provides expert design advice, ensuring your shrubs complement the surrounding elements, create visual appeal, and thrive in your local climate.</p>
                                                <p>Our experienced team provides expert design advice, ensuring your shrubs complement the surrounding elements, create visual appeal, and thrive in your local </p><br />

                                                <h5>Consultation & Design</h5>
                                                <p>We begin by discussing your needs and vision for your outdoor space. Our team evaluates the site, taking into account factors like soil, sunlight, and climate. Based on your preferences, we will suggest the best shrub species that will thrive in your garden and match your aesthetic goals.
                                                </p>
                                                <ul>

                                                </ul>
                                            </div>




                                            <div className="services-details__content-img2">
                                                <img src={publicUrl + "assets/images/services/softscape/shurbs-plantation/content2.png"} alt="#" />
                                            </div>

                                            <div className="text-box3">
                                                <h5>Site Preparation</h5>
                                                <p>
                                                    Before planting, we prepare the soil by removing any weeds, debris, or old plant material. We amend the soil with the necessary nutrients to ensure optimal growth conditions for your shrubs. Proper soil preparation is key to the success of any planting.
                                                </p>

                                            </div>


                                            <div className="text-box4">
                                                <div className="img-box">
                                                    <img src={publicUrl + "assets/images/services/softscape/shurbs-plantation/content-small.png"} alt="#" />
                                                </div>

                                                <div className="content-box">
                                                    <h5>Professional Planting</h5>
                                                    <p>
                                                        We carefully plant your shrubs, ensuring they are placed at the appropriate depth and spacing. Our planting techniques are designed to promote healthy root growth and provide your shrubs with the best chance to thrive in their new environment.
                                                    </p>
                                                </div>

                                            </div><br />

                                            <div >

                                                <br /><h5>Our Shrub Plantation Services:</h5><br />
                                                <h6>Expert Consultation</h6>
                                                <p>
                                                    Our knowledgeable team will guide you through selecting the right shrubs based on your landscape needs, aesthetic goals, and local growing conditions.
                                                </p>
                                                <h6>Healthy, High-Quality Plants</h6>
                                                <p>
                                                    We source healthy, well-established plants from trusted nurseries to ensure the success of your shrub plantation.
                                                </p>
                                                <h6>Professional Installation</h6>
                                                <p>
                                                    Our experienced crew plants your shrubs with care, ensuring proper spacing, depth, and orientation for optimal growth.
                                                </p>
                                                <h6>Long-Term Care</h6>
                                                <p>
                                                    We offer ongoing care, including trimming, pruning, and fertilization, to ensure your shrubs remain healthy and vibrant throughout the year.
                                                </p>
                                                <h6>Custom Landscaping Plans</h6>
                                                <p>
                                                    Whether you’re looking for privacy, color, or year-round beauty, we offer personalized shrub planting plans to fit your specific needs.
                                                </p>
                                                <h6>Landscape Design & Consultation</h6>
                                                <p>
                                                    Our experts provide customized landscape designs that blend functionality and beauty. Whether you're designing a new garden or renovating an existing space, we offer professional guidance in creating the perfect outdoor space tailored to your preferences and lifestyle.
                                                </p>
                                            </div>




                                            <div className="faq-two__accordion faq-two__accordion--services">
                                                <h5> Why Choose Shrub Plantation for Your Landscape?</h5><br />
                                                <ul className="accordion-box">
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Enhance Aesthetic Appeal
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Shrubs offer an immediate visual impact, transforming any garden or landscape with their rich textures, vibrant colors, and diverse forms. Whether you’re aiming for a formal, natural, or modern design, shrubs can add structure and beauty to your garden year-round, with various species providing seasonal interest through foliage, flowers, and berries.
                                                            </p>
                                                        </div>
                                                    </li>

                                                    <li className="accordion block active-block">
                                                        <div className="acc-btn active">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Privacy & Screening Solutions
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content current">
                                                            <p>
                                                                If you're looking for natural privacy, shrubs are a cost-effective and eco-friendly solution. Planting dense shrubs along property lines or around patios and decks creates effective barriers to block unwanted views, while still maintaining a natural, attractive setting. This is ideal for enhancing your outdoor privacy while keeping the space open and breathable.
                                                            </p>
                                                        </div>
                                                    </li>

                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Low-Maintenance & Durable
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>
                                                                Once established, shrubs are relatively low-maintenance. They require less care than larger trees or flowers and are hardier in various weather conditions. With the right species, shrubs can tolerate a range of soil types and climate conditions, making them an excellent choice for any garden.
                                                            </p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Versatility for Any Landscape
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>
                                                                From foundation plantings to hedges, borders, or stand-alone statement pieces, shrubs can be incorporated into virtually any landscape design. Whether you need them for texture, height variation, or to complement other plants, shrubs are incredibly versatile, working well in both small urban gardens and large estate properties.
                                                            </p>
                                                        </div>
                                                    </li>
                                                </ul><br /><br /><br />

                                                <h5> Frequently Asked Questions (FAQs)</h5><br />
                                                <ul className="accordion-box">
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                How do I know which shrubs will grow best in my garden?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>
                                                                Our team conducts a thorough site analysis, taking into account your garden’s soil, sunlight, climate, and overall aesthetic goals. We recommend the best shrub species that will thrive in your specific conditions.
                                                            </p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                What is the best time of year to plant shrubs?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>
                                                                The best time to plant shrubs is typically in the spring or fall. These seasons allow shrubs to establish roots before the extreme heat of summer or the cold of winter sets in. However, we can plant shrubs year-round based on the species and weather conditions.
                                                            </p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                How often do I need to water newly planted shrubs?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Newly planted shrubs require frequent watering for the first few months to establish strong roots. We will provide you with a detailed watering schedule to help your shrubs thrive during their early growth stages.</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Can shrubs be planted in containers or pots?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Yes! Many shrubs thrive in containers or pots. This option is perfect for smaller gardens, balconies, or patios. We can help you select the right shrub for container planting and offer container gardening solutions. </p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                How do I maintain my shrubs throughout the year?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Regular care includes watering, pruning, mulching, and monitoring for pests or diseases. We offer maintenance services to ensure your shrubs stay healthy, including seasonal pruning and fertilization.</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Will shrubs attract pests or animals?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>While some shrubs may attract insects or wildlife, many varieties can also serve as natural repellents for pests. Our experts will help you select shrub species that are both beautiful and resistant to pests.</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Start Sidebar */}
                                    <div className="col-xl-4">
                                        <div className="sidebar">
                                            <ServiceSearchWidget />

                                            {/* Start Sidebar Single */}

                                            <div className="sidebar__single sidebar__category wow animated fadeInUp" data-wow-delay="0.2s">
                                                <h3 className="sidebar__title">Services</h3>
                                                <ul className="sidebar__category-list">
                                                <li className="active"><Link to={process.env.PUBLIC_URL + `/softscapes`}>Softscapes </Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/VegetableGarden`}>Vegetable Garden </Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/mounts`}>Mounts</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/spiceGarden`}>Spice Garden</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/lawnExpansion`}>Lawn Expansion</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/aromaGardens`}>Aroma Gardens</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/topiaries`}>Topiaries</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/shrubPlantation`}>Shrub Plantation</Link></li>
                                                </ul>
                                            </div>
                                            {/* End Sidebar Single */}

                                            {/* <ServiceButtonWidget />
                                            <ServiceTagsWidget />
                                            <ServiceSupportWidget /> */}
                                        </div>
                                        {/* End Sidebar */}
                                    </div>
                                    {/* End Services Details Content */}
                                </div>
                            ) : para === 'VegetableGarden' ? (
                                <div className="row">
                                    {/* Start Services Details Content */}
                                    <div className="col-xl-8">
                                        <div className="services-details__content">
                                            <div className="services-details__content-img1">
                                                <img src={publicUrl + "assets/images/services/softscape/vegetable-garden/content1.png"} alt="#" />
                                            </div>

                                            <div className="text-box1">
                                                <h2>Vegetable Garden In Hirwai</h2>
                                                <p className="text1">
                                                    At we believe that the best food comes from the freshest, home-grown produce. Our Vegetable Garden Landscaping Services are designed to transform your outdoor space into a sustainable, productive garden that provides you with a variety of fresh, healthy vegetables. Whether you’re looking to start a small herb garden or a full-scale vegetable patch, we provide expert design, installation, and maintenance services to make your dream garden a reality.</p>
                                                <p>At we believe that the best food comes from the freshest, home-grown produce. Our Vegetable Garden Landscaping Services are designed to transform your outdoor space into a sustainable, productive garden that provides you with a variety of fresh, healthy vegetables. Whether you’re looking to start a small herb garden or a full-scale vegetable patch, we provide expert design, installation, and maintenance services to make your dream garden a reality.</p><br />

                                                <h5>Harvesting & Maintenance</h5>
                                                <p>Once your garden is established, we can assist with harvesting your crops at the right time to ensure the best flavor and nutritional value. We also provide ongoing maintenance services to keep your garden in top condition, including pruning, fertilizing, and replanting.
                                                </p>
                                                <ul>

                                                </ul>
                                            </div>




                                            <div className="services-details__content-img2">
                                                <img src={publicUrl + "assets/images/services/softscape/vegetable-garden/content2.png"} alt="#" />
                                            </div>

                                            <div className="text-box3">
                                                <h5>Personalized Design</h5>
                                                <p>
                                                    We design vegetable gardens tailored to your space, preferences, and growing conditions, ensuring the best chance for success.
                                                </p>

                                            </div>


                                            <div className="text-box4">
                                                <div className="img-box">
                                                    <img src={publicUrl + "assets/images/services/softscape/vegetable-garden/content-small.png"} alt="#" />
                                                </div>

                                                <div className="content-box">
                                                    <h5>Expert Advice</h5>
                                                    <p>
                                                        Our team provides expert guidance on plant selection, soil care, irrigation, and seasonal maintenance to help you achieve a thriving vegetable garden.
                                                    </p>
                                                </div>

                                            </div><br />

                                            <div >

                                                <br /><h5>Our Vegetable Garden Services:</h5><br />
                                                <h6>Garden Design & Planning</h6>
                                                <p>
                                                    We begin with a thorough consultation to understand your needs, goals, and space. Our experts design a custom vegetable garden plan tailored to your property, climate, and preferences. Whether you want raised garden beds, traditional rows, or vertical gardens, we’ll design a plan that suits your space and gardening style
                                                </p>
                                                <h6>Soil Preparation & Fertilization</h6>
                                                <p>
                                                    Healthy soil is the foundation of a successful vegetable garden. Our team will prepare the soil, amend it with organic compost and nutrients, and ensure it's well-draining and fertile. We also recommend eco-friendly fertilization methods to support long-term plant health and productivity.
                                                </p>
                                                <h6>Plant Selection</h6>
                                                <p>
                                                    We offer expert advice on selecting the best vegetable varieties for your garden based on your growing conditions, climate, and the seasons. Whether you prefer fast-growing crops like radishes and lettuce or more challenging vegetables like root crops or beans, we’ll guide you in choosing the right plants.
                                                </p>
                                                <h6>Garden Bed Installation</h6>
                                                <p>
                                                    Whether you prefer traditional in-ground gardens or raised garden beds for better drainage and easy access, we offer installation services to suit your preferences. Raised beds also make gardening more accessible for those with mobility issues.
                                                </p>
                                                <h6>Irrigation Systems</h6>
                                                <p>
                                                    To ensure your vegetables receive the right amount of water, we design and install efficient irrigation systems tailored to your garden. This includes drip irrigation, soaker hoses, or sprinkler systems, which reduce water waste and keep your plants hydrated.
                                                </p>
                                                <h6>Seasonal Planting & Crop Rotation</h6>
                                                <p>
                                                    We help you with seasonal planting, ensuring that you have a variety of vegetables growing throughout the year. We also recommend crop rotation practices to keep the soil healthy and minimize the risk of pests and diseases.
                                                </p>
                                            </div>




                                            <div className="faq-two__accordion faq-two__accordion--services">
                                                <h5> Why Choose a Vegetable Garden?</h5><br />
                                                <ul className="accordion-box">
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Fresh, Healthy Produce
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p> Enjoy the satisfaction of harvesting fresh vegetables and herbs right from your garden. You’ll know exactly where your food comes from and be able to enjoy healthier meals.
                                                            </p>
                                                        </div>
                                                    </li>

                                                    <li className="accordion block active-block">
                                                        <div className="acc-btn active">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Sustainable Gardening
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content current">
                                                            <p>
                                                                Grow your own food and reduce your carbon footprint. By planting a vegetable garden, you can minimize food waste and avoid store-bought produce that often comes with heavy packaging.
                                                            </p>
                                                        </div>
                                                    </li>

                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Cost Savings
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>
                                                                Growing your own vegetables can save you money on grocery bills over time, particularly with high-demand or expensive crops like tomatoes, peppers, and leafy greens.
                                                            </p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Educational Opportunity
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>
                                                                A vegetable garden is a great learning opportunity for families and children, offering hands-on lessons in sustainability, nutrition, and gardening.
                                                            </p>
                                                        </div>
                                                    </li>
                                                </ul><br /><br /><br />

                                                <h5> Frequently Asked Questions (FAQs)</h5><br />
                                                <ul className="accordion-box">
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                What are the benefits of having a vegetable garden?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>
                                                                A vegetable garden provides fresh, organic produce for you and your family, saving money on groceries while also promoting sustainability and self-sufficiency. It also offers numerous health benefits, including physical activity and mental relaxation.
                                                            </p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Can I have a vegetable garden if I don’t have a lot of space?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>
                                                                Absolutely! We offer solutions like raised garden beds, container gardening, and vertical gardening that are perfect for smaller spaces like balconies or patios. You can still grow a variety of vegetables, even with limited space.
                                                            </p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                How much maintenance does a vegetable garden require?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Vegetable gardens do require some regular care, such as watering, weeding, and harvesting. However, with proper planning and our ongoing maintenance services, we ensure that your garden thrives with minimal effort on your part.</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                What vegetables are best for beginners?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Some of the easiest vegetables to grow for beginners include lettuce, tomatoes, cucumbers, carrots, and herbs like basil and mint. We’ll help you choose vegetables that are suitable for your skill level and climate.</p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Do you offer organic vegetable gardening services?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Yes! We specialize in organic vegetable gardening and can help you create a chemical-free garden that prioritizes eco-friendly practices, including natural pest control, composting, and organic fertilizers. </p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                How often should I water my vegetable garden?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Watering frequency depends on your specific plants and climate. We’ll set up an efficient irrigation system and provide guidance on watering to ensure your vegetables get the right amount of moisture.</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Start Sidebar */}
                                    <div className="col-xl-4">
                                        <div className="sidebar">
                                            <ServiceSearchWidget />

                                            {/* Start Sidebar Single */}

                                            <div className="sidebar__single sidebar__category wow animated fadeInUp" data-wow-delay="0.2s">
                                                <h3 className="sidebar__title">Services</h3>
                                                <ul className="sidebar__category-list">
                                                <li className="active"><Link to={process.env.PUBLIC_URL + `/softscapes`}>Softscapes </Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/VegetableGarden`}>Vegetable Garden </Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/mounts`}>Mounts</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/spiceGarden`}>Spice Garden</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/lawnExpansion`}>Lawn Expansion</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/aromaGardens`}>Aroma Gardens</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/topiaries`}>Topiaries</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/shrubPlantation`}>Shrub Plantation</Link></li>
                                                </ul>
                                            </div>
                                            {/* End Sidebar Single */}

                                            {/* <ServiceButtonWidget />
                                            <ServiceTagsWidget />
                                            <ServiceSupportWidget /> */}
                                        </div>
                                        {/* End Sidebar */}
                                    </div>
                                    {/* End Services Details Content */}
                                </div>
                            ) : para === 'Mounts' ? (
                                <div className="row">
                                    {/* Start Services Details Content */}
                                    <div className="col-xl-8">
                                        <div className="services-details__content">
                                            <div className="services-details__content-img1">
                                                <img src={publicUrl + "assets/images/services/softscape/mounts/content1.png"} alt="#" />
                                            </div>

                                            <div className="text-box1">
                                                <h2>Mounts In Hirwai</h2>
                                                <p className="text1">At we believe that landscaping is not just about the plants and flowers – it's about creating an environment that harmonizes with the land, incorporating elements that bring beauty, structure, and elevation to your garden. Our Mounts Landscaping Services specialize in incorporating raised mounds and slopes to enhance the aesthetic appeal and functionality of your outdoor space.
                                                    Whether you’re looking to create a natural-looking hill, a raised bed for your plants, or an elevated feature for your garden, we provide expert mount design, installation, and maintenance services to suit your needs.</p>
                                                <p>Mounts in landscaping refer to the elevated mounds or raised areas created within a garden or landscape design. They are often used to add visual interest, create unique topography, and enhance plant growth. These raised formations can be made from soil, stone, or other natural materials.</p><br />

                                                <h5>Creating Visual Interest</h5>
                                                <p> Elevating certain areas of your landscape adds depth, contrast, and structure, giving your garden a dynamic and layered look.
                                                </p>


                                                <ul>

                                                </ul>
                                            </div>




                                            <div className="services-details__content-img2">
                                                <img src={publicUrl + "assets/images/services/softscape/mounts/content2.png"} alt="#" />
                                            </div>

                                            <div className="text-box3">
                                                <h5>Improving Drainage</h5>
                                                <p>
                                                    Mounds can be used strategically to enhance drainage, particularly in areas where water accumulation may cause issues, preventing waterlogging.
                                                </p>

                                            </div>


                                            <div className="text-box4">
                                                <div className="img-box">
                                                    <img src={publicUrl + "assets/images/services/softscape/mounts/content-small.png"} alt="#" />
                                                </div>

                                                <div className="content-box">
                                                    <h5>Planting Areas</h5>
                                                    <p>
                                                        Raised mounds provide better soil quality and drainage for plants, especially for those that require specific conditions, such as succulents, flowers, or vegetables.
                                                    </p>
                                                </div>

                                            </div><br />

                                            <div >

                                                <br /><h5>Our Mount Landscaping Services:</h5><br />
                                                <h6>GCustom Mount Design</h6>
                                                <p>
                                                    We begin by consulting with you to understand your vision for your landscape. Our experts then design a custom mound that enhances your garden’s beauty and meets your functional needs. Whether you want a natural, rolling hill or a more defined, structured mound, we create designs that work within your space.
                                                </p>
                                                <h6>Soil Preparation & Installation</h6>
                                                <p>
                                                    Creating a mound is not just about piling soil – it’s about using the right materials to ensure stability and proper growth. We prepare the soil, ensuring it's rich in nutrients and properly compacted for long-term durability. We also use the appropriate mix of soil and additives to enhance the mound’s performance.
                                                </p>
                                                <h6>Plant Selection & Installation</h6>
                                                <p>
                                                    We help you choose the right plants that will thrive in your mound’s unique environment. From drought-tolerant succulents to flowering shrubs or ornamental grasses, we ensure the plants complement the mound’s elevation and the overall landscape.
                                                </p>
                                                <h6>Erosion Control & Stabilization</h6>
                                                <p>
                                                    If your land is prone to erosion, we can design a mound that helps prevent water runoff and stabilize the soil. We incorporate natural elements like grass, ground covers, and rocks to ensure the mound stays intact, even in the face of heavy rain or wind.
                                                </p>
                                                <h6>Maintenance Services</h6>
                                                <p>
                                                    Mounts need periodic maintenance to ensure their continued health and visual appeal. We offer regular maintenance services, including replanting, adding fresh soil, and trimming to keep your mounds looking pristine year-round.
                                                </p>
                                                <h6>Hardscaping Integration</h6>
                                                <p>
                                                    For a more cohesive look, we integrate hardscaping elements such as rocks, gravel, boulders, or stone paths with your mounds. These elements add texture, structure, and functionality to the raised areas, creating a harmonious design.
                                                </p>
                                            </div>




                                            <div className="faq-two__accordion faq-two__accordion--services">
                                                <h5> Why Choose Mounts for Your Landscape?</h5><br />
                                                <ul className="accordion-box">
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Add Dimension and Depth
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Mounts create elevation, breaking up flat surfaces in your yard. This added height helps create visual layers, turning your garden into a more dynamic and interesting space.
                                                            </p>
                                                        </div>
                                                    </li>

                                                    <li className="accordion block active-block">
                                                        <div className="acc-btn active">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Improved Drainage
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content current">
                                                            <p>
                                                                Properly designed mounds can improve drainage by directing water away from sensitive areas. This is especially helpful in areas where standing water can harm plants or damage structures.
                                                            </p>
                                                        </div>
                                                    </li>

                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Better Plant Growth
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>
                                                                Certain plants thrive on raised mounds as they benefit from the better drainage and aeration that mounds offer. Mounds can be tailored to meet the needs of various plant types, such as perennials, shrubs, and flowers that need specific soil conditions.
                                                            </p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Erosion Prevention
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>
                                                                Mounts can act as natural barriers against erosion, stabilizing areas of your landscape that may be prone to water runoff. By strategically placing mounts, you help protect the soil and keep your garden intact.
                                                            </p>
                                                        </div>
                                                    </li>
                                                </ul><br /><br /><br />

                                                <h5> Frequently Asked Questions (FAQs)</h5><br />
                                                <ul className="accordion-box">
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                What types of plants work best on a mound?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>
                                                                Plants that thrive on raised mounds are typically those that require good drainage, such as succulents, ornamental grasses, and certain flowering shrubs. We help you select plants that are well-suited to your mound’s elevation and soil conditions.
                                                            </p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Will a mound prevent water from pooling in my yard?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>
                                                                Yes! Properly designed mounds help direct water away from areas where pooling might occur. They improve drainage, ensuring your garden remains dry and healthy, even after heavy rainfall.
                                                            </p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                How do I maintain my mound after it’s installed?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Maintenance is relatively simple. We offer ongoing services to refresh the mound’s soil, trim plants, and ensure it remains stable. You may also need to remove weeds or adjust irrigation as needed.</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Are mounds suitable for all types of landscapes?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Yes! Whether you have a small garden or a large property, mounds can be customized to suit various spaces. They work in both formal and informal settings, adding elegance, functionality, and texture.</p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Can mounts help with soil erosion in my garden?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p> Absolutely! Mounds can be used to stabilize slopes and prevent erosion. We design them with appropriate plantings and soil stabilizers to keep your landscape intact, even in areas prone to water runoff.</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                How long does it take to install a mound in my garden?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>The installation time depends on the size and complexity of the mound. Typically, a small to medium-sized mound can be completed within a few days, while larger, more intricate designs may take a week or more. We will provide an estimated timeline during the consultation phase.</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Start Sidebar */}
                                    <div className="col-xl-4">
                                        <div className="sidebar">
                                            <ServiceSearchWidget />

                                            {/* Start Sidebar Single */}
                                            <div className="sidebar__single sidebar__category wow animated fadeInUp" data-wow-delay="0.2s">
                                                <h3 className="sidebar__title">Services</h3>
                                                <ul className="sidebar__category-list">
                                                <li className="active"><Link to={process.env.PUBLIC_URL + `/softscapes`}>Softscapes </Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/VegetableGarden`}>Vegetable Garden </Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/mounts`}>Mounts</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/spiceGarden`}>Spice Garden</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/lawnExpansion`}>Lawn Expansion</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/aromaGardens`}>Aroma Gardens</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/topiaries`}>Topiaries</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/shrubPlantation`}>Shrub Plantation</Link></li>
                                                </ul>
                                            </div>
                                            {/* <div className="sidebar__single sidebar__category wow animated fadeInUp" data-wow-delay="0.2s">
                                                <h3 className="sidebar__title">Services</h3>
                                                <ul className="sidebar__category-list">
                                                    <li><Link to={process.env.PUBLIC_URL + `/Hardscapes`}>Hardscapes </Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/softscapes`}>Softscapes</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/aquascapes`}>Aquascapes</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/plantLibrary`}>Plant Library</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/architect`}>Architect</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/treeReplanting`}>Tree Replanting</Link></li>
                                                </ul>
                                            </div> */}
                                            {/* End Sidebar Single */}

                                            {/* <ServiceButtonWidget />
                                            <ServiceTagsWidget />
                                            <ServiceSupportWidget /> */}
                                        </div>
                                        {/* End Sidebar */}
                                    </div>
                                    {/* End Services Details Content */}
                                </div>
                            ) : para === 'Spice Garden' ? (
                                <div className="row">
                                    {/* Start Services Details Content */}
                                    <div className="col-xl-8">
                                        <div className="services-details__content">
                                            <div className="services-details__content-img1">
                                                <img src={publicUrl + "assets/images/services/softscape/spice-garden/content1.png"} alt="#" />
                                            </div>

                                            <div className="text-box1">
                                                <h2>Spice Garden In Hirwai</h2>
                                                <p className="text1">
                                                    At [Your Company Name], we bring the world of flavors to your garden with our Spice Garden Landscaping Services. Imagine stepping into your own backyard and harvesting fresh herbs, spices, and aromatic plants that you can use in your kitchen. Our expert team helps you create a vibrant and functional spice garden that adds beauty, flavor, and sustainability to your outdoor space.

                                                    Whether you're looking to plant a small herb garden for culinary purposes or a full-fledged spice garden with exotic plants, we provide tailored services to turn your gardening dreams into reality.</p>
                                                <p>A spice garden offers not only culinary benefits but also numerous other advantages. Here are some reasons why a spice garden is an excellent choice for your landscape</p><br />

                                                <h5>Spice Garden Customization</h5>
                                                <p>Not all spice gardens are created the same. Whether you prefer a garden that is focused on culinary herbs, medicinal spices, or even a combination of both, we tailor each design to your specific needs. We understand that every gardener has a different vision, and we work with you to bring that vision to life.
                                                </p>


                                                <ul>

                                                </ul>
                                            </div>




                                            <div className="services-details__content-img2">
                                                <img src={publicUrl + "assets/images/services/softscape/spice-garden/content2.png"} alt="#" />
                                            </div>

                                            <div className="text-box3">
                                                <h5>Companion Planting Integration</h5>
                                                <p>
                                                    We specialize in the practice of companion planting, which allows herbs and spices to thrive alongside other plants. Some plants benefit from being near others that repel pests or improve soil health. Our design experts integrate these plants to create a more balanced and healthy garden.
                                                </p>

                                            </div>


                                            <div className="text-box4">
                                                <div className="img-box">
                                                    <img src={publicUrl + "assets/images/services/softscape/spice-garden/content-small.png"} alt="#" />
                                                </div>

                                                <div className="content-box">
                                                    <h5>Vertical Spice Gardens</h5>
                                                    <p>
                                                        Short on space? No problem! Vertical spice gardens are the perfect solution for urban spaces or small yards. We design creative, vertical growing systems that allow you to grow a variety of herbs and spices in smaller spaces without compromising plant health or yield.
                                                    </p>
                                                </div>

                                            </div><br />

                                            <div >

                                                <br /><h5>Our  Spice Gardens Services:</h5><br />
                                                <h6>Spice Garden Design & Planning</h6>
                                                <p>
                                                    Our team works with you to understand your gardening needs and culinary preferences. We design a spice garden that fits your space, whether it's a small kitchen herb garden or a large, specialized garden filled with various spices. We consider factors like sunlight, water, and soil conditions to choose the best plants for your garden.
                                                </p>
                                                <h6>Custom Plant Selection</h6>
                                                <p>
                                                    We help you select the best spices, herbs, and aromatic plants for your garden. From common herbs like rosemary, cilantro, and parsley to exotic spices such as saffron, turmeric, and ginger, we provide expert guidance on what to plant based on your climate, space, and personal preferences.
                                                </p>
                                                <h6>Soil Preparation & Fertilization</h6>
                                                <p>
                                                    A healthy spice garden begins with healthy soil. We prepare the soil for planting, adding compost, nutrients, and organic matter to ensure that your garden thrives. Our team ensures that the soil is rich in the nutrients your plants need to grow strong and produce bountiful harvests.
                                                </p>
                                                <h6>Planting & Installation</h6>
                                                <p>
                                                    We handle the planting and installation of all your chosen spices and herbs. Whether you prefer raised beds, container gardening, or traditional ground planting, we ensure your plants are properly spaced, with the ideal growing conditions for long-term health.
                                                </p>
                                                <h6>Irrigation Systems & Watering Solutions</h6>
                                                <p>
                                                    Proper watering is essential for the success of your spice garden. We design and install efficient irrigation systems tailored to your garden’s size and plant types, ensuring your plants receive the right amount of water without waste. From drip irrigation to soaker hoses, we provide cost-effective watering solutions.
                                                </p>
                                                <h6>Seasonal Care & Maintenance</h6>
                                                <p>
                                                    Spice gardens need regular care throughout the year. We offer ongoing maintenance services, including pruning, weeding, fertilizing, and pest control. We also offer seasonal planting advice and ensure that your garden continues to thrive through the changing seasons.
                                                </p>
                                            </div>




                                            <div className="faq-two__accordion faq-two__accordion--services">
                                                <h5> Why Choose a Spice Garden?</h5><br />
                                                <ul className="accordion-box">
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Fresh,Flavorful Ingredients
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p> Grow your own spices, herbs, and aromatic plants like basil, thyme, mint, and more. Fresh herbs and spices make all the difference in cooking, giving your dishes vibrant flavors.
                                                            </p>
                                                        </div>
                                                    </li>

                                                    <li className="accordion block active-block">
                                                        <div className="acc-btn active">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Sustainability
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content current">
                                                            <p>
                                                                A spice garden encourages sustainable gardening practices, reducing the need for store-bought herbs and spices that are often packaged in plastic.
                                                            </p>
                                                        </div>
                                                    </li>

                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Health Benefits
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>
                                                                Many spices and herbs are rich in antioxidants and have medicinal properties. A homegrown spice garden provides easy access to ingredients that promote health and wellness.
                                                            </p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Aromatic Ambience
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>
                                                                Spice gardens are filled with fragrant plants that can enhance the atmosphere of your garden, adding delightful scents to your outdoor spaces.
                                                            </p>
                                                        </div>
                                                    </li>
                                                </ul><br /><br /><br />

                                                <h5> Frequently Asked Questions (FAQs)</h5><br />
                                                <ul className="accordion-box">
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                What types of spices can I grow in my garden?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>
                                                                You can grow a wide range of spices and herbs, including basil, mint, oregano, rosemary, thyme, cilantro, parsley, saffron, ginger, turmeric, and more. We help you choose the best plants based on your climate and garden space.
                                                            </p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Do I need a lot of space for a spice garden?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>
                                                                Not at all! Spice gardens can be created in small spaces, including patios, balconies, or even in containers. We offer design options that maximize space, such as raised beds or vertical gardens, for growing a variety of spices in smaller areas.
                                                            </p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Can I grow spices indoors?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Yes! Many herbs and spices thrive indoors with the right conditions, such as basil, mint, and thyme. We can help you design a spice garden that works well inside your home, including container options and tips for indoor growing.</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                How do I care for my spice garden?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p> Spice gardens require regular care, including watering, pruning, and occasional fertilizing. We offer ongoing maintenance services to help you keep your garden healthy and productive. Our team will also provide you with seasonal care guidelines to help you maintain it year-round.</p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                How do I harvest my spices?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>We provide guidance on when and how to harvest your herbs and spices for optimal flavor. For most spices, it's best to harvest them just before they reach full maturity. We also offer tips on drying and storing your herbs for later use. </p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Are the herbs and spices I grow in my garden organic?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Yes! We focus on sustainable and organic gardening methods, using eco-friendly practices and natural fertilizers to ensure your garden is free of harmful chemicals.</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Start Sidebar */}
                                    <div className="col-xl-4">
                                        <div className="sidebar">
                                            <ServiceSearchWidget />

                                            {/* Start Sidebar Single */}

                                            <div className="sidebar__single sidebar__category wow animated fadeInUp" data-wow-delay="0.2s">
                                                <h3 className="sidebar__title">Services</h3>
                                                <ul className="sidebar__category-list">
                                                <li className="active"><Link to={process.env.PUBLIC_URL + `/softscapes`}>Softscapes </Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/VegetableGarden`}>Vegetable Garden </Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/mounts`}>Mounts</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/spiceGarden`}>Spice Garden</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/lawnExpansion`}>Lawn Expansion</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/aromaGardens`}>Aroma Gardens</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/topiaries`}>Topiaries</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/shrubPlantation`}>Shrub Plantation</Link></li>
                                                </ul>
                                            </div>
                                            {/* End Sidebar Single */}

                                            {/* <ServiceButtonWidget />
                                            <ServiceTagsWidget />
                                            <ServiceSupportWidget /> */}
                                        </div>
                                        {/* End Sidebar */}
                                    </div>
                                    {/* End Services Details Content */}
                                </div>
                            ) : para === 'Ponds' ? (
                                <div className="row">
                                    {/* Start Services Details Content */}
                                    <div className="col-xl-8">
                                        <div className="services-details__content">
                                            <div className="services-details__content-img1">
                                                <img src={publicUrl + "assets/images/services/aquascapes/ponds/content1.png"} alt="#" />
                                            </div>

                                            <div className="text-box1">
                                                <h2>Ponds In Hirwai</h2>
                                                <p className="text1">we specialize in designing, creating, and maintaining beautiful ponds that bring tranquility, life, and aesthetic appeal to your outdoor space. Whether you want to create a serene water feature, a wildlife-friendly pond, or a custom design to complement your landscape, we have the expertise to turn your vision into reality.</p>
                                                <p> we specialize in designing, creating, and maintaining beautiful ponds that bring tranquility, life, and aesthetic appeal to your outdoor space. Whether you want to create a serene water feature, a wildlife-friendly pond, or a custom design to complement your landscape, we have the expertise to turn your vision into reality.</p><br />

                                                <h5>Aesthetic Appeal</h5>
                                                <p>A well-designed pond becomes a focal point in your garden, offering visual interest, seasonal beauty, and natural charm.
                                                </p>
                                                <ul>

                                                </ul>
                                            </div>




                                            <div className="services-details__content-img2">
                                                <img src={publicUrl + "assets/images/services/aquascapes/ponds/content2.png"} alt="#" />
                                            </div>

                                            <div className="text-box3">
                                                <h5>Tranquility:</h5>
                                                <p>The sound of gently flowing water creates a calming atmosphere, perfect for relaxation and stress relief.</p>

                                            </div>


                                            <div className="text-box4">
                                                <div className="img-box">
                                                    <img src={publicUrl + "assets/images/services/aquascapes/ponds/content-small.png"} alt="#" />
                                                </div>

                                                <div className="content-box">
                                                    <h5>Wildlife Habitat</h5>
                                                    <p> Ponds provide a natural habitat for local wildlife, including fish, frogs, birds, and beneficial insects, contributing to a healthy ecosystem.</p>
                                                </div>

                                            </div><br />

                                            <div >

                                                <br /><h5>Our Pond Landscaping Services:</h5><br />
                                                <h6>Pond Design & Installation</h6>
                                                <p>The foundation of every great pond starts with thoughtful design. Our expert team works with you to understand your goals, space, and style preferences. We then design a custom pond that complements your landscape, whether it’s a formal, naturalistic, or modern design.</p>

                                                <h6>Custom Pond Design</h6>
                                                <p> Our design team takes into account the layout, water features, and your landscaping vision to create a pond that enhances your property.</p>

                                                <h6>Water Features</h6>
                                                <p>Add elegance and movement with features like waterfalls, fountains, streams, or cascades to bring your pond to life.</p>

                                                <h6>Fish-Friendly Designs:</h6>
                                                <p>We can create ponds specifically designed to support fish and aquatic plants, creating a balanced ecosystem.</p>

                                                <h6>Pond Construction</h6>
                                                <p>Once the design is finalized, our skilled team gets to work constructing your pond with the highest quality materials and techniques. We ensure your pond is built to last and performs optimally throughout the seasons.</p>

                                                <h6>Durable Liner Installation</h6>
                                                <p>We use high-quality pond liners that prevent leaks and ensure long-term durability.</p>

                                            </div>




                                            <div className="faq-two__accordion faq-two__accordion--services">
                                                <h5> Why Choose for Your Pond Landscaping?</h5><br />
                                                <ul className="accordion-box">
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Expertise & Experience
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>With years of experience in pond design and installation, we have the knowledge and skills to create beautiful, functional ponds that stand the test of time. </p>
                                                        </div>
                                                    </li>

                                                    <li className="accordion block active-block">
                                                        <div className="acc-btn active">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Custom Designs
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content current">
                                                            <p>Every pond we create is uniquely tailored to your preferences, landscape, and goals. No two ponds are the same!</p>
                                                        </div>
                                                    </li>

                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Comprehensive Services
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>From design and installation to maintenance and repairs, we offer a full range of pond services to ensure your pond thrives year-round.</p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Eco-Friendly Practices
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>We prioritize sustainable, environmentally conscious practices that support the health of your pond and the surrounding ecosystem.</p>
                                                        </div>
                                                    </li>
                                                </ul><br /><br /><br />

                                                <h5> Frequently Asked Questions (FAQs)</h5><br />
                                                <ul className="accordion-box">
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Why should I add a pond to my landscape?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Ponds offer both aesthetic and practical benefits. They enhance the beauty of your outdoor space, create a serene, tranquil atmosphere, and provide a habitat for local wildlife. A well-designed pond can also increase your property’s value and improve the overall appeal of your landscape.</p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                How long does it take to install a pond?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p> The installation time varies depending on the complexity and size of the pond. Smaller, simpler ponds can typically be installed in a few days, while larger, more intricate ponds may take a week or more. We’ll provide you with a timeline during the design process.</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Will my pond require a lot of maintenance?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>While ponds require some maintenance, we offer ongoing care to ensure they stay healthy and beautiful. Regular tasks include cleaning, checking water quality, managing algae growth, and trimming aquatic plants. We can also help you maintain your pond with seasonal cleanings and upkeep, reducing the effort on your part.</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                How do I prevent algae growth in my pond?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Algae growth is a common challenge, but it can be controlled with proper pond maintenance. We provide effective filtration systems, recommend the right balance of aquatic plants, and can offer eco-friendly treatments to reduce algae growth. Regular water changes and cleaning also help maintain clear, healthy water.</p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Can I add fish to my pond?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p> Yes! If you’re interested in adding fish, particularly koi or goldfish, we can design your pond to accommodate them. We’ll ensure proper filtration, water depth, and plant life to create a thriving environment for your fish. We also provide advice on fish care and pond health to ensure your aquatic pets stay happy.</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Do you provide pond repairs if something goes wrong?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p> Absolutely! If your pond needs repair—whether it’s a leak, broken equipment, or damaged lining—we offer professional repair services. We can also upgrade your pond’s filtration system, lighting, and other features to improve its functionality and appearance.</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Start Sidebar */}
                                    <div className="col-xl-4">
                                        <div className="sidebar">
                                            <ServiceSearchWidget />
                                            {/* Start Sidebar Single */}
                                            <div className="sidebar__single sidebar__category wow animated fadeInUp" data-wow-delay="0.2s">
                                                <h3 className="sidebar__title">Services</h3>
                                                <ul className="sidebar__category-list">
                                                    <li className="active"><Link to={process.env.PUBLIC_URL + `/aquascapes`}>Aquascapes</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/ponds`}>Ponds</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/irrigationSystems`}>Irrigation Systems</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/fountains`}>Fountains</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/swimmingPools`}>Swimming Pools</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/waterfalls`}>Waterfalls</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/aquaspace`}>Aquaspace</Link></li>
                                                </ul>
                                            </div>
                                            {/* End Sidebar Single */}
                                            {/* <ServiceButtonWidget />
                                            <ServiceTagsWidget />
                                            <ServiceSupportWidget /> */}
                                        </div>
                                        {/* End Sidebar */}
                                    </div>
                                    {/* End Services Details Content */}
                                </div>
                            ) : para === 'Irrigation Systems' ? (
                                <div className="row">
                                    {/* Start Services Details Content */}
                                    <div className="col-xl-8">
                                        <div className="services-details__content">
                                            <div className="services-details__content-img1">
                                                <img src={publicUrl + "assets/images/services/aquascapes/irrigation-system/content1.png"} alt="#" />
                                            </div>

                                            <div className="text-box1">
                                                <h2>Irrigation Systems In Hirwai</h2>
                                                <p className="text1"> we specialize in designing, installing, and maintaining high-quality irrigation systems that keep your landscape lush, healthy, and water-efficient. A reliable irrigation system is essential to ensuring your plants receive the right amount of water without waste, helping you save time, money, and resources while protecting the environment.</p>
                                                <p>a comprehensive website content draft for your I irrigation systems services in landscaping. This will showcase your expertise and help potential customers understand the value of having a well-designed irrigation system in place.</p><br />

                                                <h5>Custom Irrigation System Design & Installation</h5>
                                                <p>Our team will assess your landscape, soil type, and water needs to design a custom irrigation system tailored to your property. We ensure optimal coverage to prevent overwatering or underwatering, while keeping your garden, lawn, and shrubs in excellent condition.
                                                </p>
                                                <ul>

                                                </ul>
                                            </div>




                                            <div className="services-details__content-img2">
                                                <img src={publicUrl + "assets/images/services/aquascapes/irrigation-system/content2.png"} alt="#" />
                                            </div>

                                            <div className="text-box3">
                                                <h5>Irrigation System Repairs & Upgrades</h5>
                                                <p>If your irrigation system is malfunctioning, we provide fast and effective repair services to get it back in working order. From broken pipes to malfunctioning sprinkler heads, we can diagnose and fix the issue promptly to minimize water waste and restore efficiency.</p>

                                            </div>


                                            <div className="text-box4">
                                                <div className="img-box">
                                                    <img src={publicUrl + "assets/images/services/aquascapes/irrigation-system/content-small.png"} alt="#" />
                                                </div>

                                                <div className="content-box">
                                                    <h5>Seasonal Irrigation System Maintenance</h5>
                                                    <p>To ensure your irrigation system continues to perform at its best throughout the year, we offer seasonal maintenance services. Regular inspections and adjustments are essential to maintaining water efficiency and system longevity.</p>
                                                </div>

                                            </div><br />

                                            <div >

                                                <br /><h5>Our Irrigation System Services:</h5><br />
                                                <h6>Sprinkler Systems</h6>
                                                <p> Ideal for lawns and flower beds, our sprinkler systems deliver even coverage with adjustable settings to meet your specific needs.</p>

                                                <h6>Drip Irrigation</h6>
                                                <p>Perfect for gardens, trees, and shrubs, drip irrigation delivers water directly to the roots, reducing evaporation and runoff while saving water.</p>

                                                <h6>Soaker Hoses</h6>
                                                <p>These hoses provide a gentle, even flow of water to plants, ideal for garden beds and flower borders.</p>

                                                <h6>Smart Irrigation Systems:</h6>
                                                <p>With advanced technology, we can install automated systems that adjust water schedules based on weather conditions and moisture levels, ensuring optimal watering efficiency.</p>

                                                <h6>Leak Detection & Repair</h6>
                                                <p>If your system has hidden leaks or broken pipes, we’ll identify the source of the problem and perform repairs to prevent water loss.</p>

                                                <h6>Sprinkler Head Replacement:</h6>
                                                <p>We replace damaged or worn-out sprinkler heads with newer, more efficient models to ensure precise water distribution.</p>

                                            </div>




                                            <div className="faq-two__accordion faq-two__accordion--services">
                                                <h5> Why Choose an Irrigation System for Your Landscape?</h5><br />
                                                <ul className="accordion-box">
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Water Efficiency
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Proper irrigation ensures your landscape gets the right amount of water where it’s needed, reducing waste and lowering water bills.</p>
                                                        </div>
                                                    </li>

                                                    <li className="accordion block active-block">
                                                        <div className="acc-btn active">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Time Savings
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content current">
                                                            <p>Automating your watering schedule eliminates the need for manual watering, saving you valuable time and effort.</p>
                                                        </div>
                                                    </li>

                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Healthier Plants
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Consistent and even watering promotes healthy growth and ensures that your plants, flowers, and grass receive the nutrients they need.</p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Environmentally Friendly
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Smart irrigation systems can reduce water waste by using sensors and timers, contributing to conservation efforts and helping protect the environment.</p>
                                                        </div>
                                                    </li>
                                                </ul><br /><br /><br />

                                                <h5> Frequently Asked Questions (FAQs)</h5><br />
                                                <ul className="accordion-box">
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Why should I install an irrigation system in my landscape?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>An irrigation system provides consistent and efficient watering for your plants, lawn, and garden. It saves you time, reduces water waste, and ensures that your landscape remains healthy, lush, and thriving throughout the year. It also helps you avoid overwatering or underwatering, which can damage your plants</p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                How much water will an irrigation system save me?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p> A well-designed irrigation system can save up to 50% more water than traditional manual watering methods. By delivering the right amount of water directly to the root zone and reducing evaporation, it helps to conserve water and lower your water bills.</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Will an irrigation system be expensive to install?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>The cost of installing an irrigation system depends on the size of your property, the type of system you choose, and the complexity of the installation. We provide custom quotes tailored to your landscape, ensuring that you get the best value for your investment.</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Can I install an irrigation system in an existing garden or landscape?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p> Yes! Our team specializes in retrofitting irrigation systems into existing landscapes. We’ll assess your garden, lawn, and plants and design a system that fits seamlessly with your space, ensuring optimal coverage and water efficiency.</p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                How do I know which irrigation system is right for my landscape?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Our experts will assess your landscape, including soil type, plant needs, and water requirements, and recommend the best irrigation system for you. Whether you need a simple sprinkler system or a more advanced drip irrigation system, we will ensure the solution is tailored to your needs.</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                How can I ensure that my irrigation system works properly year-round?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p> Regular maintenance is key to keeping your irrigation system working efficiently. We offer seasonal start-ups in the spring to ensure everything is running smoothly and winterization services in the fall to protect your system from freezing. We also provide regular check-ups to prevent any potential issues.</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Start Sidebar */}
                                    <div className="col-xl-4">
                                        <div className="sidebar">
                                            <ServiceSearchWidget />
                                            {/* Start Sidebar Single */}
                                            <div className="sidebar__single sidebar__category wow animated fadeInUp" data-wow-delay="0.2s">
                                                <h3 className="sidebar__title">Services</h3>
                                                <ul className="sidebar__category-list">
                                                    <li className="active"><Link to={process.env.PUBLIC_URL + `/aquascapes`}>Aquascapes</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/ponds`}>Ponds</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/irrigationSystems`}>Irrigation Systems</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/fountains`}>Fountains</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/swimmingPools`}>Swimming Pools</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/waterfalls`}>Waterfalls</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/aquaspace`}>Aquaspace</Link></li>
                                                </ul>
                                            </div>
                                            {/* End Sidebar Single */}
                                            {/* <ServiceButtonWidget />
                                            <ServiceTagsWidget />
                                            <ServiceSupportWidget /> */}
                                        </div>
                                        {/* End Sidebar */}
                                    </div>
                                    {/* End Services Details Content */}
                                </div>
                            ) : para === 'Swimming Pools' ? (
                                <div className="row">
                                    {/* Start Services Details Content */}
                                    <div className="col-xl-8">
                                        <div className="services-details__content">
                                            <div className="services-details__content-img1">
                                                <img src={publicUrl + "assets/images/services/aquascapes/swimming-pool/content1.png"} alt="#" />
                                            </div>

                                            <div className="text-box1">
                                                <h2>Swimming Pools In Hirwai</h2>
                                                <p className="text1">A swimming pool can completely transform your landscape, adding beauty, relaxation, and entertainment value to your home. Here's why a pool could be the perfect addition to your yard</p>
                                                <p>Certainly!  Below is a detailed website content draft for your Swimming Pools services in landscaping. This will help potential customers understand the benefits of adding a pool to their landscape and the services you offer related to pool installation and maintenance.</p><br />

                                                <h5>Custom Pool Design & Installation</h5>
                                                <p>Our team works closely with you to design a pool that fits seamlessly into your landscape. Whether you prefer a traditional rectangular pool, a natural lagoon-style pool, or an infinity edge pool, we can bring your vision to life. Our design services include
                                                </p>
                                                <ul>

                                                </ul>
                                            </div>




                                            <div className="services-details__content-img2">
                                                <img src={publicUrl + "assets/images/services/aquascapes/swimming-pool/content2.png"} alt="#" />
                                            </div>

                                            <div className="text-box3">
                                                <h5>Pool Renovation & Upgrades</h5>
                                                <p>Is your existing pool in need of a facelift? We offer pool renovation services to breathe new life into your old pool. From resurfacing the pool to upgrading the tile or installing modern lighting, our team can transform your pool into a stunning new retreat. Some of our renovation services include</p>

                                            </div>


                                            <div className="text-box4">
                                                <div className="img-box">
                                                    <img src={publicUrl + "assets/images/services/aquascapes/swimming-pool/content-small.png"} alt="#" />
                                                </div>

                                                <div className="content-box">
                                                    <h5>Resurfacing & Re-tiling</h5>
                                                    <p>If your pool is outdated or showing signs of wear, we can resurface the pool with durable materials that look great and last longer.</p>
                                                </div>

                                            </div><br />

                                            <div >

                                                <br /><h5>Our Swimming Pool Services:</h5><br />
                                                <h6>Pool Shape & Size</h6>
                                                <p>We help determine the best shape and size for your space, considering factors such as available space, design preferences, and function.</p>

                                                <h6>Water Features</h6>
                                                <p>Enhance your pool with features like waterfalls, fountains, or water slides for a more dynamic and visually appealing design.</p>

                                                <h6>Tiles & Finishes</h6>
                                                <p>Choose from a variety of tile and finish options that complement the overall aesthetic of your backyard, from classic tiles to modern pebble finishes.</p>

                                                <h6>Pool Equipment</h6>
                                                <p> We ensure that your pool is equipped with the latest energy-efficient pumps, filters, and heating systems for easy maintenance and long-term efficiency.</p>

                                                <h6>Resurfacing & Re-tiling</h6>
                                                <p> If your pool is outdated or showing signs of wear, we can resurface the pool with durable materials that look great and last longer.</p>

                                                <h6>Lighting & Automation</h6>
                                                <p>Add mood lighting, underwater LED lights, and smart pool controls for greater convenience and an enhanced visual effect.</p>

                                            </div>




                                            <div className="faq-two__accordion faq-two__accordion--services">
                                                <h5>Why Choose a Swimming Pool for Your Landscape?</h5><br />
                                                <ul className="accordion-box">
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                What is the difference between a saltwater pool and a traditional chlorine pool?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p> A saltwater pool uses a salt-chlorine generator to convert salt into chlorine, which sanitizes the water. It’s gentler on the skin, hair, and eyes compared to traditional chlorine pools, and reduces the need to buy and handle chlorine. However, both pool types require regular maintenance to keep the water clean and clear. Saltwater pools tend to be more environmentally friendly and cost-effective in the long run.

                                                            </p>
                                                        </div>
                                                    </li>

                                                    <li className="accordion block active-block">
                                                        <div className="acc-btn active">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                How long does it take to install a swimming pool?

                                                            </h3>
                                                        </div>
                                                        <div className="acc-content current">
                                                            <p> The time it takes to install a swimming pool depends on the type of pool and the complexity of the design. Generally, the installation of an in-ground pool takes around 6–10 weeks, while above-ground pools can be installed in just a few days. Our team will provide you with a timeline during the initial consultation based on your specific project requirements.

                                                            </p>
                                                        </div>
                                                    </li>

                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                How much maintenance is required for a swimming pool?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Regular cleaning to remove debris and keep the water clear.Testing and balancing chemicals to ensure safe swimming conditions.Equipment inspections and repairs to ensure everything functions smoothly.Winterizing services to prepare your pool for the colder months. While routine care is needed, we make maintenance easy by offering professional services to keep your pool looking great year-</p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                How do I know which pool system is best for my home?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p> The best pool system for your home depends on various factors such as the available space, your budget, and your specific needs (e.g., aesthetic preferences, intended use). During a consultation, our experts will assess your property and recommend the most suitable pool system based on your preferences and landscape. We’ll consider factors like pool type, shape, and additional features like heating and lighting.</p>
                                                        </div>
                                                    </li>
                                                </ul><br /><br /><br />

                                                <h5> Frequently Asked Questions (FAQs)</h5><br />
                                                <ul className="accordion-box">
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                What is the difference between a saltwater pool and a traditional chlorine pool?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>A saltwater pool uses a salt-chlorine generator to convert salt into chlorine, which sanitizes the water. It’s gentler on the skin, hair, and eyes compared to traditional chlorine pools, and reduces the need to buy and handle chlorine. However, both pool types require regular maintenance to keep the water clean and clear. Saltwater pools tend to be more environmentally friendly and cost-effective in the long run.</p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                How long does it take to install a swimming pool?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p> The time it takes to install a swimming pool depends on the type of pool and the complexity of the design. Generally, the installation of an in-ground pool takes around 6–10 weeks, while above-ground pools can be installed in just a few days. Our team will provide you with a timeline during the initial consultation based on your specific project requirements</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                How do I know which pool system is best for my home?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>The best pool system for your home depends on various factors such as the available space, your budget, and your specific needs (e.g., aesthetic preferences, intended use). During a consultation, our experts will assess your property and recommend the most suitable pool system based on your preferences and landscape. We’ll consider factors like pool type, shape, and additional features like heating and lighting.</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Are there energy-efficient pool systems available?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Yes! We specialize in energy-efficient pool systems that can help lower long-term operating costs. Features such as variable-speed pumps, solar heating, LED lighting, and automated systems can reduce energy consumption while maintaining a comfortable pool environment. We also offer eco-friendly pool options that minimize water usage and environmental impact.</p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Do I need to add a pool heater?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p> Pool heaters are optional, but they can extend the swimming season and make your pool more enjoyable in cooler months. We offer various pool heating options, including solar heaters, heat pumps, and gas heaters, to meet your needs. Our experts will recommend the best option based on your climate and how often you plan to use the pool. </p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Can I automate my pool system for easier control?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Absolutely! We offer smart pool automation systems that allow you to control various pool functions, such as lighting, heating, and filtration, from your smartphone or tablet. Automated systems can also adjust the pool’s settings based on weather conditions, saving energy and optimizing pool performance</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Start Sidebar */}
                                    <div className="col-xl-4">
                                        <div className="sidebar">
                                            <ServiceSearchWidget />
                                            {/* Start Sidebar Single */}
                                            <div className="sidebar__single sidebar__category wow animated fadeInUp" data-wow-delay="0.2s">
                                                <h3 className="sidebar__title">Services</h3>
                                                <ul className="sidebar__category-list">
                                                    <li className="active"><Link to={process.env.PUBLIC_URL + `/aquascapes`}>Aquascapes</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/ponds`}>Ponds</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/irrigationSystems`}>Irrigation Systems</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/fountains`}>Fountains</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/swimmingPools`}>Swimming Pools</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/waterfalls`}>Waterfalls</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/aquaspace`}>Aquaspace</Link></li>
                                                </ul>
                                            </div>
                                            {/* End Sidebar Single */}
                                            {/* <ServiceButtonWidget />
                                            <ServiceTagsWidget />
                                            <ServiceSupportWidget /> */}
                                        </div>
                                        {/* End Sidebar */}
                                    </div>
                                    {/* End Services Details Content */}
                                </div>
                            ) : para === 'Waterfalls' ? (
                                <div className="row">
                                    {/* Start Services Details Content */}
                                    <div className="col-xl-8">
                                        <div className="services-details__content">
                                            <div className="services-details__content-img1">
                                                <img src={publicUrl + "assets/images/services/aquascapes/waterfall/content1.png"} alt="#" />
                                            </div>

                                            <div className="text-box1">
                                                <h2>Waterfalls In Hirwai</h2>
                                                <p className="text1"> A waterfall can transform your outdoor space into a tranquil retreat, adding beauty, movement, and natural charm to your garden or backyard. At [Your Company Name], we specialize in designing and installing custom waterfalls that create a peaceful ambiance while seamlessly blending with your landscape.</p>
                                                <p>Certainly! Below is a detailed website content draft for your Waterfalls services in landscaping. This will highlight your expertise in creating beautiful water features and how waterfalls can enhance the aesthetic appeal of any landscape.</p><br />

                                                <h5>Aesthetic Appeal</h5>
                                                <p>Waterfalls provide a natural focal point in your garden or yard, elevating the visual appeal of your landscape with the soothing sight of cascading water.
                                                </p>
                                                <ul>

                                                </ul>
                                            </div>




                                            <div className="services-details__content-img2">
                                                <img src={publicUrl + "assets/images/services/aquascapes/waterfall/content2.png"} alt="#" />
                                            </div>

                                            <div className="text-box3">
                                                <h5>Relaxation & Tranquility</h5>
                                                <p>The sound of flowing water can have a calming effect, creating a peaceful environment where you can unwind and enjoy nature.</p>

                                            </div>


                                            <div className="text-box4">
                                                <div className="img-box">
                                                    <img src={publicUrl + "assets/images/services/aquascapes/waterfall/content-small.png"} alt="#" />
                                                </div>

                                                <div className="content-box">
                                                    <h5>Increased Property Value</h5>
                                                    <p>  Adding a waterfall to your landscaping can significantly boost the value of your property by creating a unique and luxurious outdoor setting</p>
                                                </div>

                                            </div><br />

                                            <div >

                                                <br /><h5>Our Waterfall Services:</h5><br />
                                                <h6>Custom Waterfall Design & Installation</h6>
                                                <p>Our team specializes in creating custom waterfalls that match the look and feel of your outdoor space. Whether you want a cascading waterfall that complements a pond, a gentle stream, or a dramatic rock waterfall, we can design a feature that’s both visually striking and peaceful.</p>

                                                <h6>Water Flow & Sound</h6>
                                                <p>We tailor the water flow to your preferences, whether you prefer a gentle trickle or a more dramatic, roaring cascade.</p>

                                                <h6>Integration with Existing Features</h6>
                                                <p>We ensure that your waterfall works harmoniously with other landscape features, such as ponds, gardens, or pool areas, for a unified look.</p>

                                                <h6>Pondless Waterfalls</h6>
                                                <p>If you prefer a waterfall without the need for a pond, a pondless waterfall is an ideal solution. These designs feature cascading water that flows over rocks and into a reservoir below, creating the serene sound of water without the maintenance required for a pond. Pondless waterfalls are an excellent option for smaller spaces or where a traditional pond isn’t feasible.</p>

                                                <h6>Natural Waterfalls</h6>
                                                <p>Built with natural materials like rocks, boulders, and native plants to give the appearance of a waterfall found in nature.</p>

                                                <h6>Contemporary Waterfalls:</h6>
                                                <p>Featuring clean lines, sleek materials, and minimalist designs that offer a modern twist on the traditional waterfall.</p>

                                            </div>




                                            <div className="faq-two__accordion faq-two__accordion--services">
                                                <h5> Why Choose for Your Waterfall Installation?</h5><br />
                                                <ul className="accordion-box">
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Expert Design & Craftsmanship
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Our experienced designers and landscapers work with you to create a waterfall that perfectly fits your vision and landscape. </p>
                                                        </div>
                                                    </li>

                                                    <li className="accordion block active-block">
                                                        <div className="acc-btn active">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Custom Solutions
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content current">
                                                            <p>Every waterfall we design is unique. We customize every detail—from the stones to the water flow—ensuring it matches your outdoor aesthetic.</p>
                                                        </div>
                                                    </li>

                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Seamless Integration
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p> We don’t just install a waterfall; we make sure it blends seamlessly with your existing landscape, creating a harmonious and beautiful environment.</p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Quality Materials
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>We use only the highest-quality natural stones, plants, and equipment to build long-lasting and stunning waterfalls.</p>
                                                        </div>
                                                    </li>
                                                </ul><br /><br /><br />

                                                <h5> Frequently Asked Questions (FAQs)</h5><br />
                                                <ul className="accordion-box">
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                What is a waterfall system in landscaping
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>A waterfall system in landscaping is a water feature designed to create a visually stunning and soothing environment by allowing water to flow over rocks or other materials in a cascading manner. Waterfalls can be integrated into pools, ponds, or standalone features, adding both beauty and tranquility to your outdoor space.</p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                How much space is required for installing a waterfall?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p> The amount of space needed for a waterfall depends on the design and scale of the feature. For small, simple waterfalls, a minimal area may be required, whereas larger, more intricate designs may need a larger area to accommodate the waterfall, pond, or reservoir. During our consultation, we assess your available space to ensure the waterfall fits perfectly within your landscape.</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Can a waterfall be added to an existing landscape or pool?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p> Yes, waterfalls can be seamlessly integrated into both existing landscapes and pool areas. We can design a waterfall that complements your current setup, whether you want to add it to a garden, integrate it into a pond, or create a cascading effect around your pool.</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                What is a pondless waterfall?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>A pondless waterfall is a type of waterfall system that doesn't require a pond at the base. Instead, it uses a hidden reservoir where the water is pumped to the top and cascades down over rocks or other materials. This type of waterfall is ideal for smaller spaces or areas where you want the appearance of a waterfall without the maintenance associated with a pond.</p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                How long does it take to install a waterfall system?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>The installation time for a waterfall depends on the design and complexity of the system. Simple waterfall installations can typically be completed in 1-3 days, while more intricate designs that include ponds or extensive landscaping may take a week or more. Our team will provide an estimated timeline during the consultation phase based on your specific project.</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Can I add lighting to my waterfall?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p> Yes! Adding lighting to your waterfall can create a magical effect in the evening. We offer various lighting options, including LED lights and fiber optic lights, which can be installed within the waterfall structure or around the feature to highlight the cascading water and surrounding landscape. Lighting enhances the beauty of your waterfall at night and adds ambiance to your outdoor space.</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Start Sidebar */}
                                    <div className="col-xl-4">
                                        <div className="sidebar">
                                            <ServiceSearchWidget />
                                            {/* Start Sidebar Single */}
                                            <div className="sidebar__single sidebar__category wow animated fadeInUp" data-wow-delay="0.2s">
                                                <h3 className="sidebar__title">Services</h3>
                                                <ul className="sidebar__category-list">
                                                    <li className="active"><Link to={process.env.PUBLIC_URL + `/aquascapes`}>Aquascapes</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/ponds`}>Ponds</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/irrigationSystems`}>Irrigation Systems</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/fountains`}>Fountains</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/swimmingPools`}>Swimming Pools</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/waterfalls`}>Waterfalls</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/aquaspace`}>Aquaspace</Link></li>
                                                </ul>
                                            </div>
                                            {/* <div className="sidebar__single sidebar__category wow animated fadeInUp" data-wow-delay="0.2s">
                                                <h3 className="sidebar__title">Services</h3>
                                                <ul className="sidebar__category-list">
                                                    <li><Link to={process.env.PUBLIC_URL + `/Hardscapes`}>Hardscapes </Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/softscapes`}>Softscapes</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/aquascapes`}>Aquascapes</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/plantLibrary`}>Plant Library</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/architect`}>Architect</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/treeReplanting`}>Tree Replanting</Link></li>
                                                </ul>
                                            </div> */}
                                            {/* End Sidebar Single */}
                                            {/* <ServiceButtonWidget />
                                            <ServiceTagsWidget />
                                            <ServiceSupportWidget /> */}
                                        </div>
                                        {/* End Sidebar */}
                                    </div>
                                    {/* End Services Details Content */}
                                </div>
                            ) : para === 'Aquaspace' ? (
                                <div className="row">
                                    {/* Start Services Details Content */}
                                    <div className="col-xl-8">
                                        <div className="services-details__content">
                                            <div className="services-details__content-img1">
                                                <img src={publicUrl + "assets/images/services/aquascapes/aquaspace/content1.png"} alt="#" />
                                            </div>

                                            <div className="text-box1">
                                                <h2>Aquaspace In Hirwai</h2>
                                                <p className="text1">At [Your Company Name], we specialize in creating breathtaking Aquaspace designs that bring the beauty and tranquility of water into your outdoor space. Aquaspace combines the elegance of water features like ponds, waterfalls, and streams with landscaping elements that create a relaxing, visually stunning oasis. Whether you’re looking to create a serene garden retreat, a vibrant social space, or an innovative water feature, our expert team will craft the perfect Aquaspace tailored to your style and needs.</p>
                                                <p> Aquaspace work in landscaping. This content introduces Aquaspace designs as a unique and innovative feature for transforming landscapes into serene, water-filled retreats that blend nature and luxury.</p><br />

                                                <h5>Relaxing Atmosphere</h5>
                                                <p> The sound of flowing water promotes relaxation, helping to reduce stress and create a peaceful environment perfect for unwinding.
                                                </p>
                                                <ul>

                                                </ul>
                                            </div>




                                            <div className="services-details__content-img2">
                                                <img src={publicUrl + "assets/images/services/aquascapes/aquaspace/content2.png"} alt="#" />
                                            </div>

                                            <div className="text-box3">
                                                <h5>Aesthetic Enhancement</h5>
                                                <p> Water features add elegance, beauty, and visual interest to your garden or yard, making it a more inviting and dynamic space.</p>

                                            </div>


                                            <div className="text-box4">
                                                <div className="img-box">
                                                    <img src={publicUrl + "assets/images/services/aquascapes/aquaspace/content-small.png"} alt="#" />
                                                </div>

                                                <div className="content-box">
                                                    <h5>Improved Air Quality</h5>
                                                    <p> Aquaspace features can help cool the air in your outdoor space, making it more comfortable during the warmer months while adding a natural humidifying effect.</p>
                                                </div>

                                            </div><br />

                                            <div >

                                                <br /><h5>Our Aquaspace Services:</h5><br />
                                                <h6>Custom Aquaspace Design & Installation</h6>
                                                <p>Our design experts work closely with you to develop a personalized Aquaspace plan that suits your landscape, style, and vision. Whether you want a natural, rustic aesthetic or a modern, sleek water feature, we ensure your Aquaspace design harmonizes with the existing elements of your outdoor space. We take care of every detail, including:</p>

                                                <h6>Pond and Stream Design</h6>
                                                <p>If you dream of having a pond or stream as part of your Aquaspace, our team can create a natural, flowing water system that integrates seamlessly into your landscape. Whether you want a serene koi pond, a flowing stream that meanders through your garden, or a combination of both, we’ll create the perfect water feature that meets your needs and enhances your outdoor space.</p>

                                                <h6>Waterfall & Fountain Design</h6>
                                                <p>Waterfalls and fountains are iconic elements of Aquaspace designs. Our team can create breathtaking cascading waterfalls or elegant fountains that add beauty and movement to your landscape. From large dramatic falls to subtle, peaceful trickles, we’ll craft a waterfall or fountain that fits your space and style.</p>

                                                <h6>Aquaspace Landscaping & Maintenance</h6>
                                                <p>landscape. Whether you want a serene koi pond, a flowing stream that meanders through your garden, or a combination of both, we’ll create the perfect water feature that meets your needs and enhances your outdoor space.</p>

                                                <h6>Water Feature Selections</h6>
                                                <p>Choose from a wide range of water features, such as ponds, waterfalls, streams, and fountains, based on your preferences and space requirements.</p>

                                                <h6>Rock & Stone Integration</h6>
                                                <p>We use natural and high-quality stones, boulders, and pebbles to build the foundation and aesthetic of your water features, creating a realistic and stunning effect.</p>

                                            </div>




                                            <div className="faq-two__accordion faq-two__accordion--services">
                                                <h5>Why Choose for Your Aquaspace Design?</h5><br />
                                                <ul className="accordion-box">
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Expert Design Team
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Our skilled designers have extensive experience in creating stunning Aquaspace features that integrate seamlessly with your landscape.</p>
                                                        </div>
                                                    </li>

                                                    <li className="accordion block active-block">
                                                        <div className="acc-btn active">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Customized Solutions:
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content current">
                                                            <p>Every Aquaspace we design is unique and tailored to your space, preferences, and budget.</p>
                                                        </div>
                                                    </li>

                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                High-Quality Materials:
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>We use only the best materials, from natural stones to premium aquatic plants, to ensure your Aquaspace is long-lasting and beautiful.</p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Comprehensive Services
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p> From initial design through installation and ongoing maintenance, we offer a complete range of services to ensure your Aquaspace is always in top condition.</p>
                                                        </div>
                                                    </li>
                                                </ul><br /><br /><br />

                                                <h5> Frequently Asked Questions (FAQs)</h5><br />
                                                <ul className="accordion-box">
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                What is Aquaspace in landscaping?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Aquaspace in landscaping refers to the integration of water features like ponds, waterfalls, streams, and fountains into outdoor spaces. It combines the soothing presence of water with the natural beauty of plants, rocks, and lighting to create a serene, peaceful, and visually stunning landscape that promotes relaxation and tranquility</p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                How does an Aquaspace design differ from other landscaping features?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p> Aquaspace focuses specifically on incorporating water elements into landscaping, offering a unique blend of aesthetic appeal, sound, and motion. Unlike traditional gardens, Aquaspace uses water as a central element, transforming a space into a dynamic environment that changes with light, sound, and movement.</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                How much space is required for an Aquaspace design?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>The space required for an Aquaspace design depends on the features you want to include. Smaller, more compact water features like fountains or small ponds can fit in more limited areas. Larger features like waterfalls and streams may require more space to allow for proper flow and integration with the surrounding landscape. During the consultation, we will assess your space and recommend the best options for your outdoor area.</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Can I add fish or plants to my Aquaspace design?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Yes! Aquaspace designs can easily accommodate fish and aquatic plants. In fact, adding koi fish, goldfish, or water plants like lilies and cattails can enhance the natural beauty of your water features. We can help you choose the best plants and fish suited for your pond or water garden to create a balanced, thriving ecosystem.</p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Can Aquaspace features be added to an existing landscape or garden?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Absolutely! Aquaspace elements can be seamlessly integrated into any existing landscape or garden. Whether you want to add a small fountain to an already landscaped area or install a larger pond and waterfall system, we work with your existing setup to create a harmonious design that blends with your current space.</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                How long does it take to install an Aquaspace design?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>The installation time for an Aquaspace design depends on the complexity and size of the features being incorporated. Smaller installations, such as fountains or simple ponds, can be completed in a few days, while larger, more intricate systems like waterfalls and streams may take a week or longer. We will provide an estimated timeline based on the specific scope of your project.</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Start Sidebar */}
                                    <div className="col-xl-4">
                                        <div className="sidebar">
                                            <ServiceSearchWidget />
                                            {/* Start Sidebar Single */}
                                            <div className="sidebar__single sidebar__category wow animated fadeInUp" data-wow-delay="0.2s">
                                                <h3 className="sidebar__title">Services</h3>
                                                <ul className="sidebar__category-list">
                                                    <li className="active"><Link to={process.env.PUBLIC_URL + `/aquascapes`}>Aquascapes</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/ponds`}>Ponds</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/irrigationSystems`}>Irrigation Systems</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/fountains`}>Fountains</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/swimmingPools`}>Swimming Pools</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/waterfalls`}>Waterfalls</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/aquaspace`}>Aquaspace</Link></li>
                                                </ul>
                                            </div>
                                            {/* End Sidebar Single */}
                                            {/* <ServiceButtonWidget />
                                            <ServiceTagsWidget />
                                            <ServiceSupportWidget /> */}
                                        </div>
                                        {/* End Sidebar */}
                                    </div>
                                    {/* End Services Details Content */}
                                </div>
                            ) : para === 'Fountains' ? (
                                <div className="row">
                                    {/* Start Services Details Content */}
                                    <div className="col-xl-8">
                                        <div className="services-details__content">
                                            <div className="services-details__content-img1">
                                                <img src={publicUrl + "assets/images/services/aquascapes/ponds/content1.png"} alt="#" />
                                            </div>

                                            <div className="text-box1">
                                                <h2>Fountains In Hirwai</h2>
                                                <p className="text1">At we specialize in designing and installing custom fountains that elevate your outdoor space. A fountain is more than just a water feature—it's an artistic focal point, a source of tranquility, and an enhancement to the overall beauty of your landscape. Whether you want a modern sculpture fountain, a classic tiered design, or a natural stone feature, our team is here to help you create a stunning water feature that fits your style and space.</p>
                                                <p> a draft of website content for your Fountains work in landscaping, designed to showcase your expertise in creating beautiful, functional water features that add elegance and tranquility to outdoor spaces.</p><br />

                                                <h5>Soothing Sound:</h5>
                                                <p>The sound of flowing water creates a peaceful and calming ambiance, ideal for relaxation, entertaining, or simply enjoying your outdoor environment.</p>
                                                Bring your pond to life with koi fish or other aquatic species. We design specialized ponds that cater to the needs of fish, ensuring a healthy environment with proper filtration, oxygenation, and water quality.
                                                <ul>

                                                </ul>
                                            </div>




                                            <div className="services-details__content-img2">
                                                <img src={publicUrl + "assets/images/services/aquascapes/ponds/content2.png"} alt="#" />
                                            </div>

                                            <div className="text-box3">
                                                <h5>Aesthetic Appeal</h5>
                                                <p>
                                                    Fountains bring beauty and elegance to any space. Their flowing water and artistic design act as a striking focal point that draws attention and complements your landscape
                                                </p>

                                            </div>


                                            <div className="text-box4">
                                                <div className="img-box">
                                                    <img src={publicUrl + "assets/images/services/aquascapes/ponds/content-small.png"} alt="#" />
                                                </div>

                                                <div className="content-box">
                                                    <h5>Increased Property Value</h5>
                                                    <p>  A well-designed fountain can significantly enhance your property’s curb appeal and overall value, making it more attractive to potential buyers</p>
                                                </div>

                                            </div><br />

                                            <div >

                                                <br /><h5>Our Fountain Design & Installation Services:</h5><br />
                                                <h6> Custom Fountain Design</h6>
                                                <p>Each fountain we create is unique and tailored to your specific preferences and landscape. Whether you’re looking for something classic and elegant or modern and sleek, we can design a fountain that reflects your personality and complements the surrounding garden, patio, or pool area. Our design process includes</p>

                                                <h6>Waterfalls & Streams</h6>
                                                <p>Add movement and sound to your landscape with a stunning waterfall or stream. Our designs feature natural stone and carefully engineered water flow systems to create a peaceful, cascading effect that enhances the beauty of your garden</p>

                                                <h6>Fountain Installation</h6>
                                                <p>Our skilled team handles every aspect of the fountain installation process. We ensure that the installation is smooth, efficient, and completed to the highest standards. Key steps in the installation process include:</p>

                                                <h6>Tiered Fountains</h6>
                                                <p>Tiered fountains are a traditional and elegant feature in landscaping. These multi-level fountains allow water to cascade gracefully from one tier to another, creating a dramatic effect that enhances the visual interest of any garden or yard. They are perfect for large spaces or as a focal point in a formal garden.</p>

                                                <h6>Wall Fountains</h6>
                                                <p>Wall-mounted fountains are ideal for smaller spaces or for creating a stunning vertical water feature. These fountains are attached to a wall, with water flowing down in a controlled, stylish manner. They are perfect for courtyards, patios, or areas where space is limited.</p>

                                                <h6>Tabletop Fountains</h6>
                                                <p>For a more subtle water feature, tabletop fountains are perfect. These smaller, self-contained fountains can be placed on tables, countertops, or shelves, adding a touch of tranquility to indoor or outdoor living areas. They are ideal for balconies, patios, or even inside the home.</p>

                                            </div>




                                            <div className="faq-two__accordion faq-two__accordion--services">
                                                <h5>Why Choose a Fountain for Your Landscape?</h5><br />
                                                <ul className="accordion-box">
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Wildlife Attraction
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Fountains can attract birds, butterflies, and other wildlife, enriching your landscape with natural life and adding a sense of harmony to your outdoor space.</p>
                                                        </div>
                                                    </li>

                                                    <li className="accordion block active-block">
                                                        <div className="acc-btn active">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Energy-Efficient
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content current">
                                                            <p>Modern fountain systems use energy-efficient pumps and low-maintenance designs, ensuring long-term functionality and minimal environmental impact. </p>
                                                        </div>
                                                    </li>

                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Increased Property Value
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>A well-designed fountain can significantly enhance your property’s curb appeal and overall value, making it more attractive to potential buyers.</p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Sounding
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>The sound of flowing water creates a peaceful and calming ambiance, ideal for relaxation, entertaining, or simply enjoying your outdoor environment.</p>
                                                        </div>
                                                    </li>
                                                </ul><br /><br /><br />

                                                <h5> Frequently Asked Questions (FAQs)</h5><br />
                                                <ul className="accordion-box">
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Can I install a fountain in an existing garden or yard??
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Yes, fountains can be easily integrated into existing gardens or landscapes. Whether you want to add a small tabletop fountain or a large tiered fountain, we’ll design a feature that complements your current outdoor setup. </p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                How do I maintain my fountain?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p> Fountain maintenance involves cleaning the fountain regularly to remove debris and prevent algae buildup. We also check the pump and water levels to ensure proper function. For seasonal changes, additional care may be required, and we offer maintenance services to keep your fountain in pristine condition.</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Do I need to have plumbing or electrical work done for my fountain?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Depending on the type of fountain, plumbing or electrical work may be necessary. For fountains with pumps or lights, our team will handle the installation of all plumbing and electrical components to ensure your fountain operates smoothly.</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Can I add lighting to my fountain?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Yes! We offer lighting options to enhance your fountain at night, creating a beautiful and magical atmosphere. LED lights, submerged lighting, and accent lighting can all be added to showcase the beauty of your fountain after the sun sets.</p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                How long does it take to install a fountain?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Installation times vary depending on the size and complexity of the fountain. Smaller, simpler fountains can be installed in a day, while larger, more intricate designs may take a few days to complete. We will provide an estimated timeline during the consultation.</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Will a fountain attract mosquitoes?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Properly maintained fountains generally do not attract mosquitoes. The constant movement of water prevents stagnation, which is what typically attracts mosquitoes. Additionally, we ensure that your fountain is well-maintained to keep the water fresh and clean. </p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Start Sidebar */}
                                    <div className="col-xl-4">
                                        <div className="sidebar">
                                            <ServiceSearchWidget />
                                            {/* Start Sidebar Single */}
                                            <div className="sidebar__single sidebar__category wow animated fadeInUp" data-wow-delay="0.2s">
                                                <h3 className="sidebar__title">Services</h3>
                                                <ul className="sidebar__category-list">
                                                    <li className="active"><Link to={process.env.PUBLIC_URL + `/aquascapes`}>Aquascapes</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/ponds`}>Ponds</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/irrigationSystems`}>Irrigation Systems</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/fountains`}>Fountains</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/swimmingPools`}>Swimming Pools</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/waterfalls`}>Waterfalls</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/aquaspace`}>Aquaspace</Link></li>
                                                </ul>
                                            </div>
                                            {/* End Sidebar Single */}
                                            {/* <ServiceButtonWidget />
                                            <ServiceTagsWidget />
                                            <ServiceSupportWidget /> */}
                                        </div>
                                        {/* End Sidebar */}
                                    </div>
                                    {/* End Services Details Content */}
                                </div>
                            ) : para === 'Aquascapes' ? (
                                <div className="row">
                                    {/* Start Services Details Content */}
                                    <div className="col-xl-8">
                                        <div className="services-details__content">
                                            <div className="services-details__content-img1">
                                                <img src={publicUrl + "assets/images/services/aquascapes/content1.png"} alt="#" />
                                            </div>

                                            <div className="text-box1">
                                                <h2>Aquascapes In Hirwai</h2>
                                                <p className="text1">Here’s a detailed website content for Aquascape services in landscaping. This content can help inform visitors about the beauty, functionality, and benefits of incorporating water features into their outdoor spaces.</p>
                                                <p> Transform Your Outdoors with Aquascaping specialize in creating breathtaking aquascapes that bring a sense of tranquility and natural beauty to your landscape. Whether you envision a serene pond, a cascading waterfall, or a custom-designed water garden, our team can help design and install stunning water features that turn your outdoor space into a peaceful oasis.</p><br />

                                                <h5>Waterfalls & Streams</h5>
                                                <p>Add movement and sound to your landscape with a stunning waterfall or stream. Our designs feature natural stone and carefully engineered water flow systems to create a peaceful, cascading effect that enhances the beauty of your garden.</p>

                                                Bring your pond to life with koi fish or other aquatic species. We design specialized ponds that cater to the needs of fish, ensuring a healthy environment with proper filtration, oxygenation, and water quality.
                                                <ul>

                                                </ul>
                                            </div>




                                            <div className="services-details__content-img2">
                                                <img src={publicUrl + "assets/images/services/aquascapes/content2.png"} alt="#" />
                                            </div>

                                            <div className="text-box3">
                                                <h5>Fountains</h5>
                                                <p>
                                                    A fountain can be a perfect focal point for your yard or garden. From modern, minimalist designs to classic, ornate sculptures, we can install water fountains that complement the aesthetic of your landscape while adding soothing sounds of water
                                                </p>

                                            </div>


                                            <div className="text-box4">
                                                <div className="img-box">
                                                    <img src={publicUrl + "assets/images/services/aquascapes/content-small.png"} alt="#" />
                                                </div>

                                                <div className="content-box">
                                                    <h5>Aquatic Plant Installation</h5>
                                                    <p> Aquatic plants not only enhance the visual appeal of your water feature but also improve the overall health of your pond or water garden. We offer a variety of aquatic plants, including lilies, reeds, and floating plants, to give your water feature a natural look.</p>
                                                </div>

                                            </div><br />

                                            <div >

                                                <br /><h5>Our Aquascaping Services:</h5><br />
                                                <h6>Custom Pond Design & Installation</h6>
                                                <p>Whether you’re looking for a small koi pond or a large, elegant water garden, we can design and install a custom pond that fits your vision. We consider everything from shape, size, and plant selection to filtration and water circulation, ensuring a beautiful and functional pond.</p>

                                                <h6>Waterfalls & Streams</h6>
                                                <p>Add movement and sound to your landscape with a stunning waterfall or stream. Our designs feature natural stone and carefully engineered water flow systems to create a peaceful, cascading effect that enhances the beauty of your garden</p>

                                                <h6>Fish & Koi Ponds</h6>
                                                <p>Bring your pond to life with koi fish or other aquatic species. We design specialized ponds that cater to the needs of fish, ensuring a healthy environment with proper filtration, oxygenation, and water quality.</p>

                                                <h6>Fountains</h6>
                                                <p>A fountain can be a perfect focal point for your yard or garden. From modern, minimalist designs to classic, ornate sculptures, we can install water fountains that complement the aesthetic of your landscape while adding soothing sounds of water.</p>

                                                <h6>Aquatic Plant Installation</h6>
                                                <p>Aquatic plants not only enhance the visual appeal of your water feature but also improve the overall health of your pond or water garden. We offer a variety of aquatic plants, including lilies, reeds, and floating plants, to give your water feature a natural look.</p>

                                                <h6>Water Garden Design</h6>
                                                <p>Our water garden installations allow you to enjoy the beauty of both plants and water in harmony. From lily pads to marsh grasses, we carefully plan and install the perfect combination of plants to create a peaceful, lush environment.</p>

                                            </div>




                                            <div className="faq-two__accordion faq-two__accordion--services">
                                                <h5> Why Choose Us for Your Hardscaping Needs</h5><br />
                                                <ul className="accordion-box">
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Expert Design & Installation
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Our team has years of experience in hardscape design and installation, ensuring that every project
                                                                is completed to the highest standards. </p>
                                                        </div>
                                                    </li>

                                                    <li className="accordion block active-block">
                                                        <div className="acc-btn active">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Quality Materials
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content current">
                                                            <p>We use only the best materials, so your hardscaping projects are durable and long-lasting. </p>
                                                        </div>
                                                    </li>

                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Sustainable & Eco-Friendly Practices
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Our aquascaping designs are eco-friendly and sustainable, using natural filtration systems and water-saving techniques. We focus on creating water features that are low-maintenance and environmentally responsible.</p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Ongoing Support & Maintenance
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Our relationship with you doesn’t end after installation. We provide ongoing maintenance services to ensure your aquascape continues to thrive, offering cleaning, plant care, and system checks to keep your water feature in optimal condition.</p>
                                                        </div>
                                                    </li>
                                                </ul><br /><br /><br />

                                                <h5> Frequently Asked Questions (FAQs)</h5><br />
                                                <ul className="accordion-box">
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                What is aquascaping, and how does it enhance my landscape?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Aquascaping involves the design, installation, and maintenance of water features such as ponds, waterfalls, streams, and fountains within your landscape. It enhances your outdoor space by adding visual appeal, creating a peaceful ambiance with the sound of flowing water, and promoting a healthy ecosystem for aquatic plants and wildlife. </p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                How do I maintain my aquascape after installation?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Maintaining your aquascape involves regular cleaning, managing water quality, checking filtration systems, and tending to aquatic plants. We offer ongoing maintenance packages to ensure your pond or water feature stays clean, healthy, and visually appealing. This includes removing debris, controlling algae growth, and ensuring proper water flow.</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Will installing a water feature increase the value of my property?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Yes! Aquascapes can significantly increase your property's curb appeal and value. A well-designed water feature such as a koi pond or waterfall is an attractive addition that sets your property apart from others, making it more appealing to potential buyers and enhancing your outdoor living experience.</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Can I include fish in my pond?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Absolutely! We specialize in designing ponds that support fish, including koi and goldfish. We ensure the pond has proper filtration, oxygenation, and water quality to create a healthy, thriving environment for your aquatic life.</p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Are your water features eco-friendly?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Yes! We use environmentally sustainable practices when designing and installing aquascapes. This includes using natural filtration methods, promoting water conservation, and creating habitats that support local wildlife. We design water features that not only look beautiful but are also low-maintenance and eco-conscious. </p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Do I need a permit to install a pond or water feature?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>In some cases, yes. Permits may be required, especially for larger water features like ponds, waterfalls, or streams. We are familiar with local regulations and can assist in handling the necessary paperwork and approvals to ensure your aquascaping project meets all legal requirements. </p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Start Sidebar */}
                                    <div className="col-xl-4">
                                        <div className="sidebar">
                                            <ServiceSearchWidget />
                                            {/* Start Sidebar Single */}
                                            <div className="sidebar__single sidebar__category wow animated fadeInUp" data-wow-delay="0.2s">
                                                <h3 className="sidebar__title">Services</h3>
                                                <ul className="sidebar__category-list">
                                                    <li className="active"><Link to={process.env.PUBLIC_URL + `/aquascapes`}>Aquascapes </Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/ponds`}>Ponds</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/irrigationSystems`}>Irrigation Systems</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/fountains`}>Fountains</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/swimmingPools`}>Swimming Pools</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/waterfalls`}>Waterfalls</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/aquaspace`}>Aquaspace</Link></li>
                                                </ul>
                                            </div>
                                            {/* End Sidebar Single */}
                                            {/* <ServiceButtonWidget />
                                            <ServiceTagsWidget />
                                            <ServiceSupportWidget /> */}
                                        </div>
                                        {/* End Sidebar */}
                                    </div>
                                    {/* End Services Details Content */}
                                </div>
                            ) : para === 'Plant Library' ? (
                                <div className="row">
                                    {/* Start Services Details Content */}
                                    <div className="col-xl-8">
                                        <div className="services-details__content">
                                            <div className="services-details__content-img1">
                                                <img src={publicUrl + "assets/images/services/plant-library/content1.png"} alt="#" />
                                            </div>

                                            <div className="text-box1">
                                                <h2>Plant Library In Hirwai</h2>
                                                <p className="text1">Your Guide to Beautiful Landscaping we believe that every great landscape begins with the right plants. Our Plant Library is an extensive collection of plant information to help you select the perfect species for your outdoor space. Whether you’re a seasoned gardener or a first-time homeowner looking to transform your yard, we’re here to provide the guidance you need to make informed, confident choices.</p>
                                                <p>Here’s a detailed website content for a Plant Library section in landscaping, focusing on educating customers about plant options and helping them choose the best plants for their landscape.</p><br />

                                                <h5>Shrubs & Bushes</h5>
                                                <p> Shrubs are a key element of any landscape, offering texture, privacy, and structure. Our library features easy-to-care-for varieties and vibrant flowering shrubs that provide both beauty and function.</p>
                                                Groundcovers & Vines
                                                Need to fill in gaps or prevent soil erosion? Groundcovers and climbing vines can cover large areas quickly, creating a lush carpet or dramatic vertical interest. We offer recommendations for low-maintenance, hardy options.
                                                <ul>

                                                </ul>
                                            </div>




                                            <div className="services-details__content-img2">
                                                <img src={publicUrl + "assets/images/services/plant-library/content2.png"} alt="#" />
                                            </div>

                                            <div className="text-box3">
                                                <h5>Shrubs & Bushes</h5>
                                                <p>Shrubs are a key element of any landscape, offering texture, privacy, and structure. Our library features easy-to-care-for varieties and vibrant flowering shrubs that provide both beauty and function.</p>

                                            </div>


                                            <div className="text-box4">
                                                <div className="img-box">
                                                    <img src={publicUrl + "assets/images/services/plant-library/content-small.png"} alt="#" />
                                                </div>

                                                <div className="content-box">
                                                    <h5>Flowering Plants</h5>
                                                    <p> Bring vibrant color to your garden with a wide selection of flowering plants. From perennials that bloom year after year to seasonal flowers, our library includes options for every color palette and garden style.</p>
                                                </div>

                                            </div><br />

                                            <div >

                                                <br /><h5>Our PlantLibrary Services:</h5><br />
                                                <h6>Edible Plants</h6>
                                                <p>Grow your own food with our selection of edible plants. We feature a variety of fruits, vegetables, herbs, and even edible flowers that can be seamlessly incorporated into your landscape.</p>

                                                <h6>Ornamental Grasses</h6>
                                                <p>Add movement and texture with ornamental grasses. From tall, flowing varieties to shorter, compact grasses, these plants provide unique visual interest and are often low-maintenance.</p>

                                                <h6>Expertly Curated Selection</h6>
                                                <p>Our Plant Library isn’t just a random list of plants—each entry is thoughtfully selected by experienced horticulturists and landscape designers. We provide only plants that thrive in your specific climate zone, ensuring they grow healthy and strong. This careful curation helps you avoid costly mistakes and time spent on plants that aren't suitable for your space.</p>

                                                <h6>Filters to Match Your Needs</h6>
                                                <p>Our Plant Library makes plant selection easier than ever by allowing you to filter results based on your preferences. Whether you’re looking for drought-tolerant plants, low-maintenance options, or deer-resistant varieties, our search filters let you pinpoint exactly what you need with just a few clicks.</p>

                                                <h6>Planting & Design Tips for Every Garden</h6>
                                                <p>Along with the plant descriptions, we provide practical advice on how to incorporate these plants into your landscape design. Need help with spacing, companion planting, or creating balance and flow in your garden? Our design tips will help you plan a landscape that’s as functional as it is beautiful.</p>

                                                <h6>Sustainable Plant Choices</h6>
                                                <p>We’re committed to promoting sustainable gardening practices, and many of the plants in our library are chosen for their ability to thrive with minimal resources. From drought-resistant species to native plants that require little upkeep, we emphasize eco-friendly options that are both beautiful and easy to care for. These plants not only benefit your garden but also help preserve local ecosystems by supporting pollinators and reducing water usage.</p>

                                            </div>




                                            <div className="faq-two__accordion faq-two__accordion--services">
                                                <h5> Why Choose Our Plant Library?</h5><br />
                                                <ul className="accordion-box">
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Expert Recommendations
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Our Plant Library is curated by experienced horticulturists and landscape designers, providing expert insights on which plants thrive in your local environment. We help you choose plants that will succeed in your climate and soil type. </p>
                                                        </div>
                                                    </li>

                                                    <li className="accordion block active-block">
                                                        <div className="acc-btn active">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Custom Planting Plans
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content current">
                                                            <p>Looking to create a garden that fits your style and needs? Our team can help you design custom planting plans based on your preferences. We will provide recommendations from our Plant Library and guide you in creating a beautiful, functional outdoor space.</p>
                                                        </div>
                                                    </li>

                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Diverse Plant Selection
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>We listen to your needs and tailor every project to fit your unique style and budget.</p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Sustainability
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Many of the plants featured in our library are chosen for their sustainability and ability to thrive with minimal water and maintenance. We prioritize eco-friendly choices that benefit both your garden and the environment.</p>
                                                        </div>
                                                    </li>
                                                </ul><br /><br /><br />

                                                <h5> Frequently Asked Questions (FAQs)</h5><br />
                                                <ul className="accordion-box">
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                What is the Plant Library?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>The Plant Library is a comprehensive online resource where you can explore a wide variety of plants suitable for different types of landscapes. It offers detailed plant information, care guides, design tips, and filtering tools to help you select the perfect plants for your garden. Whether you're an experienced gardener or a beginner, the library is designed to make plant selection easier and more enjoyable.</p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                How can I use the Plant Library to choose plants for my garden?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>You can easily browse our Plant Library by filtering plants based on categories such as sun exposure, water needs, plant type (trees, shrubs, flowers, etc.), growth size, and even your local hardiness zone. Each plant entry includes detailed descriptions, care instructions, and design tips, so you can make informed choices about what will thrive in your landscape.</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Can I get personalized plant recommendations?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Yes! We offer personalized plant recommendations based on your specific landscape needs. Whether you need advice on what to plant in a shaded area, how to create a sustainable garden, or which plants are best for your soil and climate, our team of experts can help guide your choices.</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Do I need to be an expert to use the Plant Library?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Not at all! The Plant Library is designed to be user-friendly and accessible for gardeners of all levels. Each plant entry provides simple, clear information about its growing needs, ideal environment, and care instructions. Whether you’re a seasoned gardener or new to landscaping, our library can help you find the right plants for your space.</p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Can I save plants I like or create a garden plan?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Absolutely! You can save your favorite plants to a personal list and even create a custom garden plan. This allows you to visualize your garden layout and see how different plants will fit together in your space before making any decisions. </p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Are there any plants that are specifically suited for low-maintenance gardens?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Yes, we have a selection of low-maintenance plants in our library, including drought-tolerant species, native plants, and those that require minimal pruning. These plants are perfect for those looking for a beautiful garden with less upkeep. </p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Start Sidebar */}
                                    <div className="col-xl-4">
                                        <div className="sidebar">
                                            <ServiceSearchWidget />
                                            {/* Start Sidebar Single */}
                                            <div className="sidebar__single sidebar__category wow animated fadeInUp" data-wow-delay="0.2s">
                                                <h3 className="sidebar__title">Services</h3>
                                                <ul className="sidebar__category-list">
                                                    <li className="active"><Link to={process.env.PUBLIC_URL + `/plantLibrary`}>Plant Library</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/indoorNOutdoor`}>Indoor & Outdoor</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/succulent`}>Succulent</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/maintenanceNServices`}>Maintenance & Services</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/decorativePots`}>Decorative Pots</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/plantDecoration`}>PlantDecoration</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/plants`}>Plants</Link></li>
                                                </ul>
                                            </div>
                                            {/* End Sidebar Single */}
                                            {/* <ServiceButtonWidget />
                                            <ServiceTagsWidget />
                                            <ServiceSupportWidget /> */}
                                        </div>
                                        {/* End Sidebar */}
                                    </div>
                                    {/* End Services Details Content */}
                                </div>
                            ) : para === 'INDOOR & OUTDOOR' ? (
                                <div className="row">
                                    {/* Start Services Details Content */}
                                    <div className="col-xl-8">
                                        <div className="services-details__content">
                                            <div className="services-details__content-img1">
                                                <img src={publicUrl + "assets/images/services/plant-library/indoor&outdoor/content1.png"} alt="#" />
                                            </div>

                                            <div className="text-box1">
                                                <h2>Indoor & Outdoor In Hirwai</h2>
                                                <p className="text1"> Your Landscaping Experts for Indoor & Outdoor Spaces
                                                    we specialize in transforming both indoor and outdoor spaces into beautiful, functional environments. Whether you're looking to enhance your backyard oasis or create a stunning indoor garden, our team of expert landscapers is here to bring your vision to life.</p>
                                                <p>Here’s a sample of website content you could use for a landscaping business that offers both indoor and outdoor work. Feel free to customize it based on your business specifics!</p><br />

                                                <h5>Indoor Plant Design</h5>
                                                <p> From small potted plants to large indoor trees, we’ll help you select the right plants for your indoor environment, giving your space a fresh, natural feel.</p>
                                                and create a stunning focal point with a living wall or vertical garden designed to suit your interior
                                                <ul>

                                                </ul>
                                            </div>




                                            <div className="services-details__content-img2">
                                                <img src={publicUrl + "assets/images/services/plant-library/indoor&outdoor/content2.png"} alt="#" />
                                            </div>

                                            <div className="text-box3">
                                                <h5>Indoor Water Features</h5>
                                                <p>Add tranquility and beauty with custom water features such as fountains or small ponds designed for indoor spaces.</p>

                                            </div>


                                            <div className="text-box4">
                                                <div className="img-box">
                                                    <img src={publicUrl + "assets/images/services/plant-library/indoor&outdoor/content-small.png"} alt="#" />
                                                </div>

                                                <div className="content-box">
                                                    <h5>Maintenance Services</h5>
                                                    <p>Regular maintenance ensures that your indoor plants stay healthy and vibrant. We offer ongoing care to make sure your indoor landscaping thrives.</p>
                                                </div>

                                            </div><br />

                                            <div >

                                                <br /><h5>Our Indoor & Outdoor Services:</h5><br />
                                                <h6>Living Walls & Vertical Gardens</h6>
                                                <p>Maximize space and create a stunning focal point with a living wall or vertical garden designed to suit your interior.</p>

                                                <h6>Garden Design & Installation</h6>
                                                <p>Custom garden design that matches your style, from flower beds to vegetable gardens and everything in between.</p>

                                                <h6>Patios, Walkways & Retaining Walls</h6>
                                                <p>We design and install patios, walkways, and retaining walls that will not only enhance the beauty of your property but also provide functional solutions.</p>

                                                <h6>Lawn Care & Maintenance</h6>
                                                <p>Keep your lawn looking lush and vibrant with our professional lawn care services, including mowing, edging, and fertilizing.</p>

                                                <h6>Tree & Shrub Planting</h6>
                                                <p>Our experts can help you choose the right trees and shrubs for your yard, ensuring they thrive and complement your landscaping design.</p>

                                                <h6>Outdoor Lighting</h6>
                                                <p>Illuminate your outdoor spaces with stylish and energy-efficient lighting solutions that enhance your landscape’s beauty after dark.</p>

                                            </div>




                                            <div className="faq-two__accordion faq-two__accordion--services">
                                                <h5> Why Choose Our Indoor & Outdoor?</h5><br />
                                                <ul className="accordion-box">
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Expertise
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>With years of experience, our team has the skills and knowledge to handle all aspects of landscaping—both inside and out.</p>
                                                        </div>
                                                    </li>

                                                    <li className="accordion block active-block">
                                                        <div className="acc-btn active">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Custom Designs
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content current">
                                                            <p>Every project is unique. We listen to your needs and create a personalized design that suits your style and space.</p>
                                                        </div>
                                                    </li>

                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Sustainability
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>We believe in environmentally responsible practices. Our plants, materials, and methods are selected to be eco-friendly and sustainable.</p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                High-Quality Workmanship
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Our team is dedicated to delivering the highest standard of service, ensuring your landscape looks beautiful and lasts for years to come.</p>
                                                        </div>
                                                    </li>
                                                </ul><br /><br /><br />

                                                <h5> Frequently Asked Questions (FAQs)</h5><br />
                                                <ul className="accordion-box">
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                What types of outdoor landscaping services do you offer?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>We offer a variety of outdoor services including garden design, lawn care, hardscaping (patios, walkways, retaining walls), tree and shrub planting, outdoor lighting, and irrigation systems. We can help transform any outdoor space into a functional and beautiful environment.</p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Can you design a custom garden for my backyard?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Absolutely! We specialize in custom garden design that complements your style, from flower beds to vegetable gardens and more. Our team will work with you to select the right plants, layout, and features for your space.</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                How do you handle lawn care and maintenance?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>We offer comprehensive lawn care services, including mowing, edging, fertilization, and pest control. Our maintenance programs can be tailored to meet the needs of your specific lawn, ensuring it stays healthy and vibrant throughout the year.</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Do you provide hardscaping services like patios or retaining walls?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Yes, we specialize in hardscaping! Whether you're looking for a beautiful patio, a functional retaining wall, or a charming walkway, we can design and install high-quality hardscape elements that enhance your outdoor space.</p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                How long does it take to complete an outdoor landscaping project?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>The timeline for an outdoor project depends on its size and complexity. A simple garden redesign may take a few days, while larger projects like patios or full-yard renovations could take several weeks. We’ll provide a detailed timeline during your consultation.</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Can you create a living wall for my office or home?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p> Yes! We specialize in designing and installing living walls, which are vertical gardens that make a bold statement in any space. They not only add beauty but also help with air purification. </p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Start Sidebar */}
                                    <div className="col-xl-4">
                                        <div className="sidebar">
                                            <ServiceSearchWidget />
                                            {/* Start Sidebar Single */}
                                            <div className="sidebar__single sidebar__category wow animated fadeInUp" data-wow-delay="0.2s">
                                                <h3 className="sidebar__title">Services</h3>
                                                <ul className="sidebar__category-list">
                                                    <li className="active"><Link to={process.env.PUBLIC_URL + `/plantLibrary`}>Plant Library</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/indoorNOutdoor`}>Indoor & Outdoor</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/succulent`}>Succulent</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/maintenanceNServices`}>Maintenance & Services</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/decorativePots`}>Decorative Pots</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/plantDecoration`}>PlantDecoration</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/plants`}>Plants</Link></li>
                                                </ul>
                                            </div>
                                            {/* End Sidebar Single */}
                                            {/* <ServiceButtonWidget />
                                            <ServiceTagsWidget />
                                            <ServiceSupportWidget /> */}
                                        </div>
                                        {/* End Sidebar */}
                                    </div>
                                    {/* End Services Details Content */}
                                </div>
                            ) : para === 'Succulent' ? (
                                <div className="row">
                                    {/* Start Services Details Content */}
                                    <div className="col-xl-8">
                                        <div className="services-details__content">
                                            <div className="services-details__content-img1">
                                                <img src={publicUrl + "assets/images/services/plant-library/succulent/content1.png"} alt="#" />
                                            </div>

                                            <div className="text-box1">
                                                <h2>Succulent In Hirwai</h2>
                                                <p className="text1">At [Your Company Name], we specialize in creating stunning succulent landscapes that add beauty, texture, and low-maintenance elegance to any space. Whether you're looking to transform your garden, patio, or indoor environment, succulents are a versatile and sustainable choice that thrives with minimal care. Let us help you design a unique succulent garden that suits your style and space!</p>
                                                <p>Here’s some engaging website content specifically focused on succulent landscaping. This can help showcase your expertise in designing and maintaining succulent gardens and add a touch of creativity to your landscaping business</p><br />

                                                <h5>Low Maintenance</h5>
                                                <p> Succulents are perfect for busy homeowners. They require less water and attention compared to other plants, making them ideal for those who want a beautiful garden with minimal effort.</p>
                                                <p>Succulents are not just beautiful; they’re also practical! These hardy plants require little water, thrive in various climates, and come in a wide range of shapes, sizes, and colors. Here are some of the benefits of choosing succulents for your landscaping project</p>
                                                <ul>

                                                </ul>
                                            </div>




                                            <div className="services-details__content-img2">
                                                <img src={publicUrl + "assets/images/services/plant-library/succulent/content1.png"} alt="#" />
                                            </div>

                                            <div className="text-box3">
                                                <h5>Drought-Resistant</h5>
                                                <p>Succulents store water in their leaves, so they can survive periods of dry weather, making them perfect for water-wise gardens and eco-friendly landscapes.</p>

                                            </div>


                                            <div className="text-box4">
                                                <div className="img-box">
                                                    <img src={publicUrl + "assets/images/services/plant-library/succulent/content-small.png"} alt="#" />
                                                </div>

                                                <div className="content-box">
                                                    <h5>Versatile Design</h5>
                                                    <p>With their variety of colors, textures, and shapes, succulents can be used in various landscaping designs—whether in rock gardens, container gardens, or integrated into larger garden beds.</p>
                                                </div>

                                            </div><br />

                                            <div >

                                                <br /><h5>Our Succulent Landscaping Services</h5><br />
                                                <h6>Succulent Garden Design & Installation</h6>
                                                <p>We specialize in creating custom succulent gardens that suit your personal style and the specific conditions of your space. Whether you're looking for a modern, minimalist look or a colorful, vibrant display, we’ll design a garden that works for you. Our succulent designs include</p>

                                                <h6>Succulent Maintenance Services</h6>
                                                <p>Although succulents are low-maintenance, they still require occasional care. We offer maintenance services to ensure your succulent garden remains healthy and vibrant throughout the year. Our maintenance services include</p>

                                                <h6>Succulent Arrangements for Indoor Spaces</h6>
                                                <p>Succulents aren’t just for outdoor gardens. They’re a fantastic choice for indoor spaces as well! We create beautiful succulent arrangements</p>

                                                <h6>Themed Gardens</h6>
                                                <p>From desert landscapes to coastal succulent designs, we can create themed gardens that suit your vision.</p>

                                                <h6>Pest Control</h6>
                                                <p>We provide pest management solutions to protect your succulents from common pests like aphids or mealybugs.</p>

                                                <h6>Soil & Repotting</h6>
                                                <p>Succulents often outgrow their containers, and we can help with repotting or refreshing the soil for optimal growth.</p>

                                            </div>




                                            <div className="faq-two__accordion faq-two__accordion--services">
                                                <h5> Why Choose  Succulents for Your Landscape??</h5><br />
                                                <ul className="accordion-box">
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Low Maintenance
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Succulents are perfect for busy homeowners. They require less water and attention compared to other plants, making them ideal for those who want a beautiful garden with minimal effort.</p>
                                                        </div>
                                                    </li>

                                                    <li className="accordion block active-block">
                                                        <div className="acc-btn active">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Drought-Resistant
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content current">
                                                            <p>Succulents store water in their leaves, so they can survive periods of dry weather, making them perfect for water-wise gardens and eco-friendly landscapes.</p>
                                                        </div>
                                                    </li>

                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Versatile Design
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p> With their variety of colors, textures, and shapes, succulents can be used in various landscaping designs—whether in rock gardens, container gardens, or integrated into larger garden beds.</p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Eco-Friendly
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Many succulents are native to arid environments and can thrive in regions with little water. By using succulents, you can create a sustainable garden that’s both beautiful and environmentally responsible.</p>
                                                        </div>
                                                    </li>
                                                </ul><br /><br /><br />

                                                <h5> Frequently Asked Questions (FAQs)</h5><br />
                                                <ul className="accordion-box">
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Why should I choose succulents for my landscape?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p> Succulents are a fantastic choice for landscaping because they are low-maintenance, drought-tolerant, and visually unique. Their ability to thrive with minimal water makes them an eco-friendly and sustainable option, and their diverse shapes, colors, and textures bring a modern and beautiful touch to any space.</p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                What type of succulent plants are best for landscaping?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>There are many types of succulents that are ideal for landscaping. Some popular choices include Aloe Vera, Echeveria, Sedum, Agave, and Crassula (Jade Plant). We help you select the best varieties based on your space, climate, and personal aesthetic preferences.</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Can succulents be grown in containers or do they need to be planted in the ground?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Succulents can thrive both in the ground and in containers. Containers offer great flexibility for smaller spaces like balconies, patios, or as indoor decor. We can design and install succulent gardens in pots, planters, and larger containers to suit any environment.</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                What is involved in the installation process for a succulent garden?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p> The installation process begins with a consultation to understand your vision and space. Our team will then carefully select and arrange the succulents, ensuring they are placed in a way that promotes healthy growth and creates a visually appealing design. The process may involve preparing the soil, adding proper drainage, and arranging the plants to complement your outdoor or indoor space.</p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                How long does it take to install a succulent garden?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>The installation time depends on the size and complexity of the design. Smaller gardens or container installations may take just a few hours, while larger garden installations can take a day or more. We provide an estimated timeline during the consultation.</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                How often should I water my succulents?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Succulents only need to be watered when the soil is completely dry. In general, this means watering about once every 1-2 weeks, depending on the climate and time of year. Overwatering is one of the most common mistakes, so we always recommend a "less is more" approach. </p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Start Sidebar */}
                                    <div className="col-xl-4">
                                        <div className="sidebar">
                                            <ServiceSearchWidget />
                                            {/* Start Sidebar Single */}
                                            <div className="sidebar__single sidebar__category wow animated fadeInUp" data-wow-delay="0.2s">
                                                <h3 className="sidebar__title">Services</h3>
                                                <ul className="sidebar__category-list">
                                                    <li className="active"><Link to={process.env.PUBLIC_URL + `/plantLibrary`}>Plant Library</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/indoorNOutdoor`}>Indoor & Outdoor</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/succulent`}>Succulent</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/maintenanceNServices`}>Maintenance & Services</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/decorativePots`}>Decorative Pots</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/plantDecoration`}>PlantDecoration</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/plants`}>Plants</Link></li>
                                                </ul>
                                            </div>
                                            {/* End Sidebar Single */}
                                            {/* <ServiceButtonWidget />
                                            <ServiceTagsWidget />
                                            <ServiceSupportWidget /> */}
                                        </div>
                                        {/* End Sidebar */}
                                    </div>
                                    {/* End Services Details Content */}
                                </div>
                            ) : para === 'MAINTENANCE & SERVICES' ? (
                                <div className="row">
                                    {/* Start Services Details Content */}
                                    <div className="col-xl-8">
                                        <div className="services-details__content">
                                            <div className="services-details__content-img1">
                                                <img src={publicUrl + "assets/images/services/plant-library/maintenance-n-services/content1.png"} alt="#" />
                                            </div>

                                            <div className="text-box1">
                                                <h2>Maintenance and Services In Hirwai</h2>
                                                <p className="text1">At we understand that maintaining a beautiful landscape requires consistent care and attention to detail. Whether you have a lush garden, a pristine lawn, or an intricate hardscape, our landscaping maintenance services will keep your outdoor space looking its best all year round.
                                                    Our expert team is here to handle all aspects of your landscaping, from regular lawn care to seasonal cleanups and everything in between. We offer customizable maintenance plans to ensure your landscape stays healthy, vibrant, and inviting.</p>
                                                <p>Here's a sample of website content tailored for landscaping maintenance and services</p><br />

                                                <h5>Lawn Care & Mowing</h5>
                                                <p> A well-manicured lawn is the foundation of any beautiful landscape. Our comprehensive lawn care services include.</p>
                                                <p> We prepare your garden for each season, from fall cleanups to spring planting.</p>
                                                <ul>

                                                </ul>
                                            </div>




                                            <div className="services-details__content-img2">
                                                <img src={publicUrl + "assets/images/services/plant-library/maintenance-n-services/content2.png"} alt="#" />
                                            </div>

                                            <div className="text-box3">
                                                <h5>Planting & Transplanting</h5>
                                                <p>We help design and plant new gardens or move existing plants to better locations.</p>

                                            </div>


                                            <div className="text-box4">
                                                <div className="img-box">
                                                    <img src={publicUrl + "assets/images/services/plant-library//content-small.png"} alt="#" />
                                                </div>

                                                <div className="content-box">
                                                    <h5>Mulching & Soil Improvement</h5>
                                                    <p> We refresh your garden beds with new mulch and enrich the soil to enhance plant health.</p>
                                                </div>

                                            </div><br />

                                            <div >

                                                <br /><h5>Our Landscaping Maintenance & Services</h5><br />
                                                <h6>Hardscape Maintenance</h6>
                                                <p>Hardscaping elements, such as patios, walkways, and retaining walls, require care to maintain their appearance and functionality. We offer</p>

                                                <h6>Pressure Washings</h6>
                                                <p>We clean outdoor surfaces like patios, driveways, and walkways to restore their appearance.</p>

                                                <h6>Repairs & Restoration</h6>
                                                <p> If your hardscaping has cracks or damage, we provide professional repair services to restore its beauty.</p>

                                                <h6>Tree Trimming & Pruning</h6>
                                                <p>Regular trimming improves tree health, encourages growth, and prevents potential hazards.</p>

                                                <h6>Shrub Pruning</h6>
                                                <p>We keep your shrubs shaped and healthy, removing dead or overgrown branches to promote fresh growth.</p>

                                                <h6>Hardscape Installation</h6>
                                                <p> From patios and pathways to fire pits and retaining walls, we design and install beautiful hardscapes that add function and style to your yard.</p>

                                            </div>




                                            <div className="faq-two__accordion faq-two__accordion--services">
                                                <h5> Why Choose Landscaping Maintenance & Services?</h5><br />
                                                <ul className="accordion-box">
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Experienced Professionals
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Our team has years of experience in landscaping and garden maintenance, providing expert care for your outdoor space.</p>
                                                        </div>
                                                    </li>

                                                    <li className="accordion block active-block">
                                                        <div className="acc-btn active">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Customized Plans
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content current">
                                                            <p>We offer tailored maintenance plans to suit your specific needs, ensuring your landscape is properly cared for year-round.</p>
                                                        </div>
                                                    </li>

                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Reliable & Consistent
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>We pride ourselves on being punctual and dependable, with regular visits to keep your landscape in top shape.</p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Quality Service
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>We use high-quality tools, materials, and techniques to ensure the best possible results for your property.</p>
                                                        </div>
                                                    </li>
                                                </ul><br /><br /><br />

                                                <h5> Frequently Asked Questions (FAQs)</h5><br />
                                                <ul className="accordion-box">
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                What types of landscaping maintenance services do you offer?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>We offer a wide range of services including lawn care, garden maintenance, tree and shrub care, irrigation system services, hardscape maintenance, seasonal cleanups, and more. Our services are customizable to meet your specific needs, whether you're looking for regular upkeep or one-time services.</p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                How often do I need landscaping maintenance services?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p> The frequency of maintenance depends on the specific needs of your landscape. For example, lawn mowing might be weekly, while tree pruning could be done a few times a year. We offer both one-time and ongoing maintenance packages to ensure your landscape stays healthy and beautiful all year round.</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Do you provide fertilization services for lawns and gardens?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Yes, we offer fertilization services to promote strong and healthy growth. We use high-quality fertilizers tailored to the needs of your lawn and garden. Proper fertilization is essential for maintaining vibrant, green plants and grass.</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                What’s the best way to take care of my garden throughout the year?

                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Regular care is key to maintaining a healthy garden. We offer services such as planting, pruning, mulching, and seasonal cleanups to keep your garden in great shape. Our team will also advise you on the right time to plant and protect your garden based on the season.</p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Should I have my stone or brick hardscapes sealed?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Yes, sealing hardscaping surfaces such as patios, walkways, and retaining walls helps protect them from weathering, staining, and wear. We offer professional sealing services to preserve the beauty of your hardscapes and ensure they last longer.</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Do you offer tree removal services?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Yes, we offer safe tree removal services. If a tree is diseased, dead, or poses a risk to your property, we can safely remove it. We take every precaution to ensure the job is done with minimal disruption and environmental impact.</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Start Sidebar */}
                                    <div className="col-xl-4">
                                        <div className="sidebar">
                                            <ServiceSearchWidget />
                                            {/* Start Sidebar Single */}
                                            <div className="sidebar__single sidebar__category wow animated fadeInUp" data-wow-delay="0.2s">
                                                <h3 className="sidebar__title">Services</h3>
                                                <ul className="sidebar__category-list">
                                                    <li className="active"><Link to={process.env.PUBLIC_URL + `/plantLibrary`}>Plant Library</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/indoorNOutdoor`}>Indoor & Outdoor</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/succulent`}>Succulent</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/maintenanceNServices`}>Maintenance & Services</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/decorativePots`}>Decorative Pots</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/plantDecoration`}>PlantDecoration</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/plants`}>Plants</Link></li>
                                                </ul>
                                            </div>
                                            {/* End Sidebar Single */}
                                            {/* <ServiceButtonWidget />
                                            <ServiceTagsWidget />
                                            <ServiceSupportWidget /> */}
                                        </div>
                                        {/* End Sidebar */}
                                    </div>
                                    {/* End Services Details Content */}
                                </div>
                            ) : para === 'DecorativePots' ? (
                                <div className="row">
                                    {/* Start Services Details Content */}
                                    <div className="col-xl-8">
                                        <div className="services-details__content">
                                            <div className="services-details__content-img1">
                                                <img src={publicUrl + "assets/images/services/plant-library/decorative-pots/content1.png"} alt="#" />
                                            </div>

                                            <div className="text-box1">
                                                <h2>Decoration Pots In Hirwai</h2>
                                                <p className="text1">At we believe that the details make all the difference. That’s why we specialize in offering an exquisite selection of decorative pots that will add charm, style, and personality to your outdoor and indoor spaces. Whether you're looking for elegant planters for your garden, modern pots for your patio, or unique containers to enhance your interior design, we have the perfect solution for you.
                                                    Decorative pots not only enhance the aesthetics of your landscape but also provide a functional way to display your plants. Our curated collection of planters is designed to complement any style, from minimalist modern to rustic charm, ensuring that your plants get the beautiful setting they deserve.</p>
                                                <p>At we offer an extensive range of services to incorporate decorative pots into your landscape</p><br />

                                                <h5>Custom Pot Selection & Sourcing</h5>
                                                <p>Not sure which pot fits best with your design vision? We work with you to select the perfect decorative pots for your space. We offer an assortment of materials, colors, and sizes to match your style, from elegant terracotta pots to contemporary metal designs.</p>
                                                <p>Whether you're looking for vibrant, bold planters or subtle, elegant designs, decorative pots can perfectly complement your existing landscape and enhance </p>
                                                <ul>

                                                </ul>
                                            </div>




                                            <div className="services-details__content-img2">
                                                <img src={publicUrl + "assets/images/services/plant-library/decorative-pots/content2.png"} alt="#" />
                                            </div>

                                            <div className="text-box3">
                                                <h5>Fiberglass</h5>
                                                <p>Lightweight yet durable, fiberglass pots are an excellent choice for larger plants and trees. They are weather-resistant and easy to move around, making them a popular option for both indoor and outdoor use.</p>

                                            </div>


                                            <div className="text-box4">
                                                <div className="img-box">
                                                    <img src={publicUrl + "assets/images/services/plant-library/decorative-pots/content-small.png"} alt="#" />
                                                </div>

                                                <div className="content-box">
                                                    <h5>Terracotta</h5>
                                                    <p>Traditional and timeless, terracotta pots add warmth and rustic charm to your landscape. Their porous nature allows for good air circulation and drainage, making them ideal for plants that need well-drained soil.</p>
                                                </div>

                                            </div><br />

                                            <div >

                                                <br /><h5>Our Decorative Pot Services</h5><br />
                                                <h6>Custom Pot Selection & Sourcing</h6>
                                                <p>Not sure which pot fits best with your design vision? We work with you to select the perfect decorative pots for your space. We offer an assortment of materials, colors, and sizes to match your style, from elegant terracotta pots to contemporary metal designs.</p>

                                                <h6>Installation & Placement</h6>
                                                <p>We don’t just supply decorative pots – we help you place them in ideal spots around your landscape to maximize visual impact. Whether you're looking to frame an entryway, create a stunning garden focal point, or add dimension to your patio, our team will ensure that each pot enhances your outdoor or indoor space.</p>

                                                <h6>Container Gardens Design</h6>
                                                <p>Transform your pots into beautiful container gardens! We design and plant stunning arrangements tailored to your pots, ensuring that your plants thrive while creating a striking visual statement. From vibrant flower arrangements to chic succulent gardens, we’ll help you choose the right plants to complement your decorative pots.</p>

                                                <h6>Maintenance & Care for Decorative Pots</h6>
                                                <p>While decorative pots are low-maintenance, they still benefit from periodic care. Our team offers pot cleaning and seasonal maintenance services, ensuring that your pots remain pristine and your plants stay healthy. We also check for proper drainage and recommend any necessary soil or plant adjustments.</p>

                                                <h6>Enhance Curb Appeal</h6>
                                                <p>Decorative pots can greatly improve the curb appeal of your home or business. Whether you place them near entryways, along walkways, or on patios, they create a welcoming and visually appealing atmosphere for visitors.</p>

                                                <h6>Space Optimization</h6>
                                                <p>For properties with limited garden space, decorative pots provide a perfect solution. They allow you to bring plants and greenery to areas that may not be suitable for traditional garden beds, such as balconies, rooftops, or patios.</p>

                                            </div>




                                            <div className="faq-two__accordion faq-two__accordion--services">
                                                <h5> Why Choose Decorative Pots?</h5><br />
                                                <ul className="accordion-box">
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Wide Selection
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>We offer a vast range of decorative pots in various styles, materials, and sizes to suit every taste and landscape. Whether you’re designing a modern garden or creating a classic outdoor space, we have the perfect pots to elevate your design. </p>
                                                        </div>
                                                    </li>

                                                    <li className="accordion block active-block">
                                                        <div className="acc-btn active">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Expert Advice & Design
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content current">
                                                            <p>Our team is here to guide you through the selection process, helping you choose the best pots for your plants and space. We provide expert design advice to ensure that your pots complement the existing style of your landscape or home.</p>
                                                        </div>
                                                    </li>

                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Quality Products
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>We source our decorative pots from trusted manufacturers who prioritize quality and durability. Our pots are built to withstand outdoor elements and are designed to keep your plants thriving.</p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Custom Services
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>From custom pot selection to container garden design, we offer personalized services that cater to your specific needs. We are committed to helping you create the landscape of your dreams.</p>
                                                        </div>
                                                    </li>
                                                </ul><br /><br /><br />

                                                <h5> Frequently Asked Questions (FAQs)</h5><br />
                                                <ul className="accordion-box">
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                What are decorative pots, and how are they used in landscaping?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Decorative pots are planters or containers that are designed to hold plants while enhancing the aesthetics of your landscape. They come in various materials, shapes, and sizes and can be placed on patios, walkways, gardens, or even indoors. They serve both a functional and decorative purpose, adding color, style, and personality to any space.</p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Do decorative pots only work outdoors, or can I use them indoors as well?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Decorative pots can be used both indoors and outdoors. They are versatile enough to enhance any space, whether it’s a garden, patio, or interior room. Indoor pots often feature stylish designs that complement home décor, while outdoor pots are designed to withstand the elements.</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                What materials are decorative pots made from?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Decorative pots are available in a variety of materials, including ceramic, fiberglass, terracotta, concrete, metal, and stone. Each material has its benefits, with some being more durable and weather-resistant than others. For example, ceramic and terracotta pots are traditional and aesthetically pleasing, while fiberglass and metal pots offer modern, lightweight alternatives.</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Can I use different-sized pots together in my landscape?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Absolutely! Mixing different sizes of pots can create visual interest and variety in your landscape. Larger pots are perfect for trees or shrubs, while smaller pots can be used for flowers, herbs, or succulents. We can help you create a balanced and harmonious arrangement with a variety of pot sizes.</p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                How do I take care of my decorative pots?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Decorative pots are relatively low-maintenance, but they do require periodic care. For outdoor pots, ensure they have proper drainage to prevent water buildup, and clean them regularly to remove dirt and debris. If your pots are made of material like ceramic or terracotta, check for cracks or wear over time. Indoor pots should be cleaned and dusted regularly. We also offer maintenance services to keep your pots in top condition.</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                How do I ensure the plants in my decorative pots thrive?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>To ensure healthy plants, it’s important to use the right soil, provide adequate watering, and ensure that each pot has proper drainage. Different plants have different care needs, so choose plants that suit the size of your pot and your climate. We can help you select the right plants and provide guidance on caring for them in your decorative pots.</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Start Sidebar */}
                                    <div className="col-xl-4">
                                        <div className="sidebar">
                                            <ServiceSearchWidget />
                                            {/* Start Sidebar Single */}
                                            <div className="sidebar__single sidebar__category wow animated fadeInUp" data-wow-delay="0.2s">
                                                <h3 className="sidebar__title">Services</h3>
                                                <ul className="sidebar__category-list">
                                                    <li className="active"><Link to={process.env.PUBLIC_URL + `/plantLibrary`}>Plant Library</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/indoorNOutdoor`}>Indoor & Outdoor</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/succulent`}>Succulent</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/maintenanceNServices`}>Maintenance & Services</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/decorativePots`}>Decorative Pots</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/plantDecoration`}>PlantDecoration</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/plants`}>Plants</Link></li>
                                                </ul>
                                            </div>
                                            {/* End Sidebar Single */}
                                            {/* <ServiceButtonWidget />
                                            <ServiceTagsWidget />
                                            <ServiceSupportWidget /> */}
                                        </div>
                                        {/* End Sidebar */}
                                    </div>
                                    {/* End Services Details Content */}
                                </div>
                            ) : para === 'Plant Decoration' ? (
                                <div className="row">
                                    {/* Start Services Details Content */}
                                    <div className="col-xl-8">
                                        <div className="services-details__content">
                                            <div className="services-details__content-img1">
                                                <img src={publicUrl + "assets/images/services/plant-library/plant-decoration/content1.png"} alt="#" />
                                            </div>

                                            <div className="text-box1">
                                                <h2>Plant Decoration In Hirwai</h2>
                                                <p className="text1">At we believe plants are more than just greenery—they're an essential part of your outdoor and indoor spaces that bring life, color, and character. With our plant decoration services, we help you incorporate plants into your landscape in a way that enhances its beauty and reflects your unique style. Whether it’s for a lush garden, stylish patio, or indoor oasis, our team specializes in designing and arranging plants that create visually striking spaces.
                                                    From large statement trees to delicate flowering plants, we ensure that every plant arrangement is designed thoughtfully to bring balance and harmony to your environment. Let us help you create a space where nature and design come together seamlessly.</p>
                                                <p> With our plant decoration services, we help you incorporate plants into your landscape in a way that enhances its beauty and reflects your unique style. Whether it’s for a lush garden</p><br />

                                                <h5>Hanging Plants</h5>
                                                <p> Perfect for balconies, patios, and kitchens, hanging plants add a touch of nature without taking up space. From cascading vines to blooming flowers, these plants can add visual height and lushness to your décor.</p>
                                                Improve the environmental quality of your surroundings by incorporating plants into your home or garden.
                                                <ul>

                                                </ul>
                                            </div>




                                            <div className="services-details__content-img2">
                                                <img src={publicUrl + "assets/images/services/plant-library/plant-decoration/content2.png"} alt="#" />
                                            </div>

                                            <div className="text-box3">
                                                <h5>Table Centerpieces</h5>
                                                <p>A potted plant or succulent arrangement on a coffee table or dining table can provide a simple yet elegant focal point, elevating your interior design.</p>

                                            </div>


                                            <div className="text-box4">
                                                <div className="img-box">
                                                    <img src={publicUrl + "assets/images/services/plant-library/plant-decoration/content-small.png"} alt="#" />
                                                </div>

                                                <div className="content-box">
                                                    <h5>Potted Trees for Indoor Spaces</h5>
                                                    <p>Large indoor plants like ficus trees, rubber plants, or palms create a bold statement and add an element of sophistication to any room.</p>
                                                </div>

                                            </div><br />

                                            <div >

                                                <br /><h5>Our Plant Decoration Services</h5><br />
                                                <h6>Custom Plant Arrangements</h6>
                                                <p>We design beautiful, customized plant arrangements that suit your space and design preferences. Whether you need a lush green wall, cascading planters, or a table centerpiece, we ensure that every plant arrangement reflects your style while complementing your space.</p>

                                                <h6>Indoor Plant Design</h6>
                                                <p>Plants can transform any room into a lively, inviting space. We offer indoor plant decoration services that range from small potted plants on desks to large statement plants in living rooms or entryways. We also provide stylish plant containers that match your décor.</p>

                                                <h6>Outdoor Plant Decorations</h6>
                                                <p>Bring your outdoor spaces to life with our plant decoration services for gardens, patios, terraces, and balconies. We’ll help you select the best plants to suit your space, from decorative trees to hanging baskets, creating a beautiful and welcoming environment.</p>

                                                <h6>Vertical Gardens & Green Walls</h6>
                                                <p>For a modern and eco-friendly touch, we specialize in creating stunning vertical gardens and green walls. This space-saving solution allows you to incorporate an abundance of greenery into smaller areas, making your space feel lush and vibrant.</p>

                                                <h6>Planter & Pot Styling</h6>
                                                <p>Not only do we offer plant decorations, but we also offer decorative pots and planters to complement your plants. Choose from our wide selection of stylish pots in various sizes, materials, and designs, ensuring a cohesive and polished look for your plants.</p>

                                                <h6>Seasonal Plant Decorations</h6>
                                                <p>Celebrate the changing seasons with seasonal plant arrangements. Whether it’s spring flowers, summer foliage, autumn hues, or winter greenery, we offer seasonal plant decorating services that bring a fresh look to your space all year long.</p>

                                            </div>




                                            <div className="faq-two__accordion faq-two__accordion--services">
                                                <h5> Why Choose Plant Decorations for Your Landscape?</h5><br />
                                                <ul className="accordion-box">
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Natural Beauty
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Plants offer natural beauty and vibrancy. With a carefully curated selection, plant decorations can bring dynamic color, texture, and fragrance to your landscape, transforming even the simplest space into a stunning garden or room.</p>
                                                        </div>
                                                    </li>

                                                    <li className="accordion block active-block">
                                                        <div className="acc-btn active">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Air Quality & Well-being
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content current">
                                                            <p>Plants purify the air, reducing pollutants and enhancing your space with fresh oxygen. They’re proven to improve mood and productivity, making them a perfect addition to both home and office spaces.</p>
                                                        </div>
                                                    </li>

                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Seasonal Appeal
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Plant decorations can evolve with the seasons. From vibrant spring flowers to cozy winter greenery, you can refresh your space with new plants year-round, ensuring it always looks fresh and welcoming.</p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Create a Relaxing Atmosphere
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Plants help to create a calm, serene environment. Whether indoors or outdoors, incorporating plants into your décor provides a peaceful, soothing atmosphere—ideal for unwinding or entertaining guests.</p>
                                                        </div>
                                                    </li>
                                                </ul><br /><br /><br />

                                                <h5> Frequently Asked Questions (FAQs)</h5><br />
                                                <ul className="accordion-box">
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                What is plant decoration in landscaping?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Plant decoration involves using various plants—ranging from flowers and trees to succulents and shrubs—to enhance the aesthetic appeal of both outdoor and indoor spaces. It’s about strategically placing plants in ways that complement the design of your landscape, bringing beauty, texture, and color to your environment.</p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Can plant decorations be used indoors as well as outdoors?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Yes! Plant decorations are versatile and can be used both indoors and outdoors. Indoor plants bring life and freshness to any room, while outdoor plants enhance gardens, patios, balconies, and yards. We offer plant decorations that suit both environments, ensuring your space looks vibrant and cohesive.</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                What are vertical gardens and how do they work for decoration?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p> Vertical gardens, or green walls, are plant decorations arranged vertically to cover walls, fences, or trellises. They are ideal for smaller spaces or urban environments, where ground space is limited. Vertical gardens add lush greenery and make a bold statement while saving space. We design and install these gardens to suit your space and design goals</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Can you create themed plant decorations for special events?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Absolutely! We can create plant decorations that fit any theme or special occasion, such as weddings, parties, corporate events, or seasonal decorations. Whether you need floral centerpieces, green wall installations, or potted plant arrangements, we will design plant displays that complement your event's theme and atmosphere.</p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                How much maintenance do plant decorations require?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>The level of maintenance depends on the types of plants selected. Some plants, like succulents and cacti, are low-maintenance and require minimal watering and care, while others like flowering plants may need more frequent attention. We can help you choose plants that match the amount of time and care you want to dedicate to maintenance.</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Do you provide plant maintenance services?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>gular watering, fertilization, pruning, pest control, and repotting when necessary. We can tailor a maintenance schedule based on the plants you have and your preferences.</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Start Sidebar */}
                                    <div className="col-xl-4">
                                        <div className="sidebar">
                                            <ServiceSearchWidget />
                                            {/* Start Sidebar Single */}
                                            <div className="sidebar__single sidebar__category wow animated fadeInUp" data-wow-delay="0.2s">
                                                <h3 className="sidebar__title">Services</h3>
                                                <ul className="sidebar__category-list">
                                                    <li className="active"><Link to={process.env.PUBLIC_URL + `/plantLibrary`}>Plant Library</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/indoorNOutdoor`}>Indoor & Outdoor</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/succulent`}>Succulent</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/maintenanceNServices`}>Maintenance & Services</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/decorativePots`}>Decorative Pots</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/plantDecoration`}>PlantDecoration</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/plants`}>Plants</Link></li>
                                                </ul>
                                            </div>
                                            {/* End Sidebar Single */}
                                            {/* <ServiceButtonWidget />
                                            <ServiceTagsWidget />
                                            <ServiceSupportWidget /> */}
                                        </div>
                                        {/* End Sidebar */}
                                    </div>
                                    {/* End Services Details Content */}
                                </div>
                            ) : para === 'Plants' ? (
                                <div className="row">
                                    {/* Start Services Details Content */}
                                    <div className="col-xl-8">
                                        <div className="services-details__content">
                                            <div className="services-details__content-img1">
                                                <img src={publicUrl + "assets/images/services/plant-library/plants/content1.png"} alt="#" />
                                            </div>

                                            <div className="text-box1">
                                                <h2>Plants In Hirwai</h2>
                                                <p className="text1">At we understand that plants are the heart of any beautiful landscape. Whether you’re looking to enhance the beauty of your garden, create a lush backyard oasis, or add green accents to your commercial property, our expert plant work services can bring your vision to life.
                                                    We offer a range of plant-related services that include everything from plant selection and installation to care and maintenance. Let us help you design a space that feels vibrant, fresh, and full of life with our tailored planting solutions.</p>
                                                <p>Here’s a well-structured website content draft for Plant Work in Landscaping that you can adapt to your needs:</p><br />

                                                <h5>Aesthetic Appeal</h5>
                                                <p>Plants bring color, texture, and variety to your space. From the bright flowers of spring to the rich foliage of fall, plants ensure your landscape is visually engaging year-round.</p>
                                                <p> We offer a wide array of plant work services to ensure your landscape looks its best. Whether you’re starting from scratch or simply looking to update your existing garden, we have the expertise to handle every aspect of planting.</p>
                                                <ul>

                                                </ul>
                                            </div>




                                            <div className="services-details__content-img2">
                                                <img src={publicUrl + "assets/images/services/plant-library/plants/content2.png"} alt="#" />
                                            </div>

                                            <div className="text-box3">
                                                <h5>Environmental Impact</h5>
                                                <p>Plants help reduce pollution, improve air quality, and provide habitat for wildlife. They also assist with soil erosion and water retention, making your space more sustainable.</p>
                                            </div>


                                            <div className="text-box4">
                                                <div className="img-box">
                                                    <img src={publicUrl + "assets/images/services/plant-library/plants/content-small.png"} alt="#" />
                                                </div>

                                                <div className="content-box">
                                                    <h5>Increased Property Value</h5>
                                                    <p>Beautifully landscaped properties, rich with plants, enhance curb appeal and can boost property value.</p>
                                                </div>

                                            </div><br />

                                            <div >

                                                <br /><h5>Our Plant Work Services:</h5><br />
                                                <h6>Custom Plant Design & Installation</h6>
                                                <p>Our team works with you to design a plant arrangement that complements your space and reflects your personal style. We consider climate conditions, soil type, and the overall aesthetic of your landscape to choose the right plants. Once the design is ready, we handle all aspects of planting and installation, ensuring a seamless and beautiful transformation.</p>

                                                <h6>Seasonal Planting</h6>
                                                <p>Change up your landscape throughout the year with our seasonal planting services. From spring flowers to winter greenery, we provide seasonal plants that will keep your space looking fresh, vibrant, and in tune with the seasons. We’ll create a planting plan that ensures year-round beauty.</p>

                                                <h6>Flower Beds & Borders</h6>
                                                <p>Flowers are an easy and effective way to add color and charm to your landscape. We design and plant flower beds and borders that will enhance the look of your garden, patio, or yard. Whether you prefer a more structured garden or a wildflower look, we have the knowledge and experience to bring your ideas to life.</p>

                                                <h6>Tree & Shrub Planting</h6>
                                                <p>Adding trees and shrubs to your landscape creates depth and dimension while providing shade, privacy, and structure. Our tree and shrub planting services are designed to enhance your outdoor space while meeting your functional needs. We help you choose the right species based on your property’s size and environmental conditions.</p>

                                                <h6>Perennial & Annual Plantings</h6>
                                                <p>Perennials are perfect for long-term investment in your landscape, as they return year after year with minimal maintenance. We also offer a wide variety of annuals for vibrant seasonal colors and displays. We’ll help you combine perennials and annuals to create a dynamic, year-round landscape that evolves with the seasons.</p>

                                                <h6>Edible Gardens</h6>
                                                <p>Create your own food garden with our edible plant work services. Whether it’s fresh herbs, vegetables, or fruit-bearing plants, we can design and plant a garden that brings delicious and healthy options right to your doorstep. Grow your own food and enjoy the beauty of plants that also nourish you!</p>
                                            </div>




                                            <div className="faq-two__accordion faq-two__accordion--services">
                                                <h5> Why Choose Your Plant Work?</h5><br />
                                                <ul className="accordion-box">
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Expert Plant Selection
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p> We carefully choose plants that will thrive in your landscape, considering the climate, soil, and sunlight. Our team will provide advice on the best plants for your specific needs, ensuring long-term success. </p>
                                                        </div>
                                                    </li>

                                                    <li className="accordion block active-block">
                                                        <div className="acc-btn active">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Tailored Landscaping Plans:
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content current">
                                                            <p>We believe that every space is unique, and we create custom plant designs that fit your style and preferences. Whether you want a lush garden or a minimalist design, we bring your vision to life.</p>
                                                        </div>
                                                    </li>

                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Sustainable Practices
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p> We prioritize sustainable planting practices that are eco-friendly and long-lasting. We focus on native plants and water-efficient solutions to minimize the environmental impact.</p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                End-to-End Service
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>From planning and planting to ongoing maintenance, we handle every aspect of the plant work process. Our team ensures your plants are healthy, thriving, and well-maintained.</p>
                                                        </div>
                                                    </li>
                                                </ul><br /><br /><br />

                                                <h5> Frequently Asked Questions (FAQs)</h5><br />
                                                <ul className="accordion-box">
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                What is plant work in landscaping?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Plant work in landscaping refers to the selection, design, installation, and maintenance of plants in outdoor spaces. This includes trees, shrubs, flowers, ground covers, and other plants that enhance the aesthetic and functional appeal of your garden, lawn, or property. It also includes preparing the site, ensuring proper plant placement, and long-term care.</p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Why are plants so important in landscaping?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Plants are essential to landscaping because they provide visual appeal, environmental benefits, and functionality. Plants add color, texture, and form to your landscape, improve air quality, reduce energy costs by providing shade, and support wildlife. They can transform a plain yard into a vibrant, peaceful oasis.</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                How do you choose the right plants for my landscape?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>We choose plants based on several factors: your landscape’s sunlight exposure, soil type, local climate, and water availability. We also consider your aesthetic preferences and the function you want your plants to serve (e.g., creating privacy, providing shade, or adding color). Our goal is to select plants that will thrive in your environment and complement the overall design of your space.</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Do you offer custom plant design for my landscape?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Yes, we offer custom plant design services tailored to your unique space and style. Whether you're looking for a low-maintenance garden, a colorful flower bed, or a lush green oasis, we work closely with you to create a planting plan that fits your vision and the specific conditions of your property.</p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Can you help with plant selection for specific purposes, like privacy or shade?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Absolutely! We can recommend plants that serve specific functions, such as creating privacy screens or providing shade. For example, fast-growing trees or hedges can provide privacy, while tall shrubs and leafy trees can be used to create shade in hot areas. We’ll help you choose the right plants to meet your functional needs. </p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                How do I care for my newly planted landscape?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>After your plants are installed, we’ll provide you with detailed care instructions for your specific plant selections. This includes watering schedules, recommended fertilizers, and tips for protecting plants from pests. If you prefer, we can also handle ongoing maintenance for you to ensure your plants thrive. </p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Start Sidebar */}
                                    <div className="col-xl-4">
                                        <div className="sidebar">
                                            <ServiceSearchWidget />
                                            {/* Start Sidebar Single */}
                                            <div className="sidebar__single sidebar__category wow animated fadeInUp" data-wow-delay="0.2s">
                                                <h3 className="sidebar__title">Services</h3>
                                                <ul className="sidebar__category-list">
                                                    <li className="active"><Link to={process.env.PUBLIC_URL + `/plantLibrary`}>Plant Library</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/indoorNOutdoor`}>Indoor & Outdoor</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/succulent`}>Succulent</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/maintenanceNServices`}>Maintenance & Services</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/decorativePots`}>Decorative Pots</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/plantDecoration`}>PlantDecoration</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/plants`}>Plants</Link></li>
                                                </ul>
                                            </div>
                                            {/* End Sidebar Single */}
                                            {/* <ServiceButtonWidget />
                                            <ServiceTagsWidget />
                                            <ServiceSupportWidget /> */}
                                        </div>
                                        {/* End Sidebar */}
                                    </div>
                                    {/* End Services Details Content */}
                                </div>
                            ) : para === 'Architect' ? (
                                <div className="">
                                    {/* Start Services Details Content */}
                                    <div className="">
                                        <div className="services-details__content">
                                            <div className="services-details__content-img1">
                                                {/* <img src={publicUrl + "assets/images/services/architech/a1.png"} alt="#" /> */}
                                            </div>

                                            <div className="text-box1">
                                                <h2>Architect In Hirwai</h2>
                                                <p className="text1">we blend artistry with precision to create stunning landscapes that go beyond the ordinary. Our architectural landscaping services are designed to enhance the beauty, function, and value of your outdoor space. Whether you're looking to design an elegant backyard retreat, an inviting public park, or a modern outdoor living area, our team of skilled landscape architects is here to bring your vision to life</p>
                                                <p> Architectural landscaping is the integration of architectural design elements into your landscape to create a harmonious, functional outdoor environment. This approach combines natural elements with structural features—such as pathways, patios, retaining walls, water features, and outdoor structures—to create a cohesive design that enhances your property's aesthetic and utility.
                                                    we focus on designing landscapes that complement the architecture of your home or business, creating seamless transitions between the built environment and nature.</p><br />

                                                <h5>Water Features & Aquatic Design</h5>
                                                <p> From ponds and waterfalls to streams and fountains, we create breathtaking water features that transform your outdoor space. Our designs integrate water elements seamlessly, adding a sense of tranquility and creating a striking focal point for your garden.</p>
                                                Illuminate your outdoor space with custom lighting that enhances the beauty and functionality of your landscape at night. We use energy-efficient lighting to highlight key features, such as pathways, trees, and architectural elements, while also ensuring safety and security.
                                                <ul>

                                                </ul>
                                            </div>




                                            <div className="services-details__content-img2">
                                                <img src={publicUrl + "assets/images/services/architech/a2.png"} alt="#" />
                                            </div>

                                            <div className="text-box3">
                                                <h5>Landscape Renovations & Upgrades</h5>
                                                <p>Whether you want to update your existing landscape or completely overhaul your outdoor space, our team can redesign and renovate your yard to meet your needs and style preferences. We provide solutions for every budget and ensure that the new design enhances the overall function and beauty of your property.</p>
                                            </div>


                                            <div className="text-box4">
                                                <div className="img-box">
                                                    <img src={publicUrl + "assets/images/services/architech/a3.png"} alt="#" />
                                                </div>

                                                <div className="content-box">
                                                    <h5>Commercial Landscaping</h5>
                                                    <p> We provide landscaping services for commercial properties, including office buildings, retail spaces, and parks. Our designs enhance curb appeal, attract customers, and create pleasant environments for employees and visitors. We work with architects, engineers, and property managers to ensure the design complements the surrounding architecture and meets all regulatory standards.</p>
                                                </div>

                                            </div><br />

                                            <div >

                                                <br /><h5>Our Architectural Landscaping Services:</h5><br />
                                                <h6> Custom Landscape Design</h6>
                                                <p>Our landscape architects work closely with you to understand your goals, preferences, and site conditions. We create a detailed design that incorporates your ideas and enhances the beauty of your property. Whether it’s a sleek modern design or a more natural aesthetic, we ensure the design flows beautifully with the surrounding environment.</p>

                                                <h6>Hardscaping</h6>
                                                <p>Hardscaping involves the use of solid materials like stone, brick, concrete, and wood to create functional and decorative elements in your landscape. Our team designs and installs:
                                                    Patios & Decks: Creating outdoor spaces for relaxation and entertainment
                                                    Walkways & Pathways: Beautifully designed paths that guide visitors through your landscape
                                                </p>
                                                <h6>Water Features & Aquatic Design</h6>
                                                <p>From ponds and waterfalls to streams and fountains, we create breathtaking water features that transform your outdoor space. Our designs integrate water elements seamlessly, adding a sense of tranquility and creating a striking focal point for your garden.</p>

                                                <h6>Outdoor Lighting Design</h6>
                                                <p>Illuminate your outdoor space with custom lighting that enhances the beauty and functionality of your landscape at night. We use energy-efficient lighting to highlight key features, such as pathways, trees, and architectural elements, while also ensuring safety and security.</p>

                                                <h6>Planting & Greenery Design</h6>
                                                <p>Our architectural landscaping services include the selection and placement of plants that complement the design, architecture, and local climate. We choose the right plants to enhance the aesthetics and provide functional benefits, such as privacy, shade, or seasonal interest.</p>

                                                <h6>Landscape Renovations & Upgrades</h6>
                                                <p>Whether you want to update your existing landscape or completely overhaul your outdoor space, our team can redesign and renovate your yard to meet your needs and style preferences. We provide solutions for every budget and ensure that the new design enhances the overall function and beauty of your property.</p>

                                            </div>




                                            <div className="faq-two__accordion faq-two__accordion--services">
                                                <h5> Why Choose for Architectural Landscaping?</h5><br />
                                                <ul className="accordion-box">
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Expert Landscape Architects
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Our team of professional landscape architects has the experience and creativity to design spaces that reflect your unique style and functional needs. We ensure every detail is considered, from the larger design elements to the smaller touches. </p>
                                                        </div>
                                                    </li>

                                                    <li className="accordion block active-block">
                                                        <div className="acc-btn active">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Personalized Designs
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content current">
                                                            <p> We don’t believe in one-size-fits-all solutions. Each project is customized to suit your property’s architecture, style, and your specific goals, ensuring a landscape that is truly your own. </p>
                                                        </div>
                                                    </li>

                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                High-Quality Materials
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>We use only the highest-quality materials in all our projects, ensuring durability and longevity. From premium stone and wood to energy-efficient lighting and sustainable plants, we focus on quality craftsmanship in every detail.</p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Sustainable Landscaping
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Our designs prioritize sustainability by using eco-friendly materials, water-efficient irrigation systems, and native plants that reduce the need for maintenance and water consumption.</p>
                                                        </div>
                                                    </li>
                                                </ul><br /><br /><br />

                                                <h5> Frequently Asked Questions (FAQs)</h5><br />
                                                <ul className="accordion-box">
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                What is architectural landscaping?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Architectural landscaping is the integration of architectural design elements into your outdoor space, combining structures like patios, walls, water features, and walkways with natural elements like plants, trees, and lawns. It’s about creating a cohesive, functional, and aesthetically pleasing outdoor environment that complements your property’s architecture.</p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Why should I choose architectural landscaping for my property?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Architectural landscaping transforms your outdoor space into an extension of your home or business. It blends hardscaping elements (such as patios, walls, and walkways) with natural landscaping features, improving both the beauty and functionality of your property. Whether you're looking to enhance curb appeal, create outdoor living areas, or add a sense of serenity with water features, architectural landscaping can help you achieve your vision. </p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Do you offer custom landscape designs for my home or business?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Yes! We specialize in creating custom landscape designs tailored to your specific needs and preferences. Whether it’s a residential backyard or a commercial property, our team works with you to design a space that reflects your style and enhances the surrounding architecture. We focus on creating functional spaces that are also visually appealing.</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                How do I get started with architectural landscaping services?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Getting started is simple! Contact us for an initial consultation where we’ll discuss your goals, budget, and ideas. We’ll assess your property, take note of any challenges, and begin crafting a design that aligns with your vision. From there, we’ll present a detailed design plan and move forward with the installation process. </p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Can architectural landscaping work with any type of property?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Absolutely! Our architectural landscaping services are suitable for all types of properties, whether residential, commercial, or public spaces. Whether you're looking to enhance your private backyard or transform a commercial property’s exterior, we can design a plan that fits your space and enhances its functionality.</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                How long does an architectural landscaping project take to complete?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>The timeline for an architectural landscaping project depends on the size and complexity of the design. A smaller project may take a few weeks, while larger or more intricate designs can take several months. We’ll provide you with a project timeline during the planning stage so you can stay informed every step of the way.</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Start Sidebar */}
                                 
                                    {/* End Services Details Content */}
                                </div>
                            ) : para === 'Tree Replanting' ? (
                                <div className="">
                                    {/* Start Services Details Content */}
                                    <div className="">
                                        <div className="services-details__content">
                                            <div className="services-details__content-img1">
                                                {/* <img src={publicUrl + "assets/images/services/treeReplanting/tr1.png"} alt="#" /> */}
                                            </div>

                                            <div className="text-box1">
                                                <h2>Tree Replanting In Hirwai</h2>
                                                <p className="text1"> we are passionate about preserving and enhancing the natural beauty of your outdoor space through professional tree replanting services. Trees play a vital role in the environment by offering shade, enhancing curb appeal, and providing natural habitats for wildlife. Whether you need to replace an old tree or introduce new tree species to your landscape, we have the expertise to manage the process with care and precision.</p>
                                                <p>Certainly! Below is a sample content structure for a website that focuses on tree replanting within landscaping services. This is designed to highlight the importance, benefits, and process of tree replanting, while also showcasing your expertise and services</p><br />

                                                <h5>Environmental Benefits</h5>
                                                <p>Trees play a vital role in reducing carbon footprints, improving air quality, and providing habitats for wildlife.
                                                </p>
                                                <ul>

                                                </ul>
                                            </div>




                                            <div className="services-details__content-img2">
                                                <img src={publicUrl + "assets/images/services/treeReplanting/tr2.png"} alt="#" />
                                            </div>

                                            <div className="text-box3">
                                                <h5>Soil and Fertilization</h5>
                                                <p>Make a lasting first impression with a custom driveway or paved area. Our high-quality paving solutions are designed for durability, functionality, and style, ensuring your driveway withstands the test of time.</p>

                                            </div>


                                            <div className="text-box4">
                                                <div className="img-box">
                                                    <img src={publicUrl + "assets/images/services/treeReplanting/tr3.png"} alt="#" />
                                                </div>

                                                <div className="content-box">
                                                    <h5>Increased Property Value</h5>
                                                    <p> Well-planted trees increase the value of your property by enhancing its curb appeal and creating a serene atmosphere.</p>
                                                </div>

                                            </div><br />

                                            <div >

                                                <br /><h5>Our Hardscape Services:</h5><br />
                                                <h6>Site Assessment and Consultation</h6>
                                                <p>We begin by evaluating your landscape and determining the best areas for tree planting. We also consider soil quality, climate, and environmental factors.</p>

                                                <h6>Tree Selection</h6>
                                                <p>Based on your preferences and site conditions, we help you choose the right species of trees, whether you're looking for native species, fruit-bearing trees, or ornamental trees.</p>

                                                <h6>Professional Planting</h6>
                                                <p>Our expert landscapers ensure that each tree is planted with the right depth, spacing, and soil amendment to give it the best chance to grow healthy and strong.</p>

                                                <h6>Street Tree Planting:</h6>
                                                <p>We plant trees that are well-suited for urban environments, such as compact varieties that thrive in confined spaces while providing shade and improving air quality.</p>

                                                <h6>Green Roofs and Vertical Gardens</h6>
                                                <p>For city dwellers with limited ground space, we offer green roof planting and vertical garden designs that incorporate tree species adaptable to these settings.</p>

                                                <h6>Pollution Reduction:</h6>
                                                <p>Trees in urban settings are proven to reduce noise and air pollution, making the city environment healthier and more livable.</p>

                                            </div>




                                            <div className="faq-two__accordion faq-two__accordion--services">
                                                <h5> Why Choose Tree Replanting?</h5><br />
                                                <ul className="accordion-box">
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Environmental Stewardship and Sustainability
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>By choosing tree replanting, you're helping to combat climate change and promote environmental sustainability. Trees act as natural air filters, absorbing carbon dioxide and releasing oxygen. </p>
                                                        </div>
                                                    </li>

                                                    <li className="accordion block active-block">
                                                        <div className="acc-btn active">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Enhance Your Property’s Value
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content current">
                                                            <p>Properly planted trees can significantly increase the value of your property, making it more attractive to potential buyers and providing long-term investment returns.</p>
                                                        </div>
                                                    </li>

                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Long-Term Economic Benefits
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Tree replanting is not just an upfront investment but a long-term one. Over the years, trees will continue to provide value by reducing energy costs, improving air quality, and increasing property value</p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Improve Air Quality and Public Health
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Trees play a critical role in filtering pollutants from the air, including harmful chemicals and particulate matter.</p>
                                                        </div>
                                                    </li>
                                                </ul><br /><br /><br />

                                                <h5> Frequently Asked Questions (FAQs)</h5><br />
                                                <ul className="accordion-box">
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                What type of trees do you recommend for landscaping?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>We suggest a variety of trees depending on your climate, soil conditions, and aesthetic preferences. Native species are often a great choice because they require less maintenance and support local wildlife.</p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                How often should I water the newly planted trees?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p> Newly planted trees typically need more frequent watering. We provide a care plan that includes the watering schedule tailored to the species and season.</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Do you offer tree removal as well?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>Yes, we offer tree removal services if necessary, especially if a tree is unhealthy or improperly placed. Our team ensures safe and professional removal and disposal.</p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                What types of trees are best for replanting in my area
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>The best tree species depend on your local climate, soil type, and desired aesthetic. Our experts evaluate your property and recommend native or drought-resistant trees that will thrive in your region. Native species are always a great choice as they are well-adapted to the local environment and support local wildlife.</p>
                                                        </div>
                                                    </li>
                                                    <li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                How long does it take for newly planted trees to grow and mature?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p> The growth rate of trees depends on the species, soil quality, and care they receive. Some trees, like fast-growing willows or poplars, can grow up to 3 feet per year, while others, like oaks or maples, take longer to mature. Generally, it can take anywhere from 5 to 20 years for a tree to reach its full height, but they start providing benefits like shade and beauty in just a few years </p>
                                                        </div>
                                                    </li><li className="accordion block">
                                                        <div className="acc-btn">
                                                            <div className="icon-outer">
                                                                <i className="icon-plus-1"></i>
                                                            </div>
                                                            <h3>
                                                                Can trees be planted year-round, or is there a best time to plant?
                                                            </h3>
                                                        </div>
                                                        <div className="acc-content">
                                                            <p>The best time to plant trees is typically in the fall or early spring when the soil is warm enough for root growth but not too hot for the tree to become stressed. This gives the tree time to establish roots before the heat of summer or the cold of winter. However, trees can be planted year-round, as long as the ground isn't frozen, and proper care is taken to ensure their survival.</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Start Sidebar */}
                                 
                                    {/* End Services Details Content */}
                                </div>
                            ) : (<h1>Contained Not Found</h1>)

                        }

                    </div>
                </section>
            </>
        )
    }
}












{/* Start Sidebar */ }
//    <div className="col-xl-4">
//    {para === 'Softscapes' ? (
//        <div className="sidebar">
//            <ServiceSearchWidget />

//            {/* Start Sidebar Single */}

//            <div className="sidebar__single sidebar__category wow animated fadeInUp" data-wow-delay="0.2s">
//                <h3 className="sidebar__title">Services</h3>
//                <ul className="sidebar__category-list">
//                    <li className="active"><Link to={process.env.PUBLIC_URL + `/softscapes`}>Softscapes <span>(12)</span></Link></li>
//                    <li><Link to={process.env.PUBLIC_URL + `/VegetableGarden`}>Vegetable Garden <span>(15)</span></Link></li>
//                    <li><Link to={process.env.PUBLIC_URL + `/mounts`}>Mounts<span>(08)</span></Link></li>
//                    <li><Link to={process.env.PUBLIC_URL + `/spiceGarden`}>Spice Garden<span>(20)</span></Link></li>
//                    <li><Link to={process.env.PUBLIC_URL + `/lawnExpansion`}>Lawn Expansion<span>(20)</span></Link></li>
//                    <li><Link to={process.env.PUBLIC_URL + `/aromaGardens`}>Aroma Gardens<span>(20)</span></Link></li>
//                    <li><Link to={process.env.PUBLIC_URL + `/topiaries`}>Topiaries<span>(20)</span></Link></li>
//                    <li><Link to={process.env.PUBLIC_URL + `/shrubPlantation`}>Shrub Plantation<span>(20)</span></Link></li>


//                </ul>
//            </div>
//            {/* End Sidebar Single */}

//            <ServiceButtonWidget />
//            <ServiceTagsWidget />
//            <ServiceSupportWidget />
//        </div>
//    ) : para === "Hardscapes" ? (
//        <div className="sidebar">
//            <ServiceSearchWidget />

//            {/* Start Sidebar Single */}

//            <div className="sidebar__single sidebar__category wow animated fadeInUp" data-wow-delay="0.2s">
//                <h3 className="sidebar__title">Services</h3>
//                <ul className="sidebar__category-list">
//                    <li className="active"><Link to={process.env.PUBLIC_URL + `/hardscapes`}>Hardscapes <span>(12)</span></Link></li>
//                    <li><Link to={process.env.PUBLIC_URL + `/designerWalls`}>Designer Walls<span>(15)</span></Link></li>
//                    <li><Link to={process.env.PUBLIC_URL + `/rockGardens`}>Rock Gardens<span>(08)</span></Link></li>
//                    <li><Link to={process.env.PUBLIC_URL + `/deck`}>Deck<span>(20)</span></Link></li>
//                    <li><Link to={process.env.PUBLIC_URL + `/sculptures`}>Sculptures<span>(20)</span></Link></li>
//                    <li><Link to={process.env.PUBLIC_URL + `/pergolas`}>Pergolas<span>(20)</span></Link></li>
//                    <li><Link to={process.env.PUBLIC_URL + `/pavedAreas`}>PavedAreas<span>(20)</span></Link></li>
//                    <li><Link to={process.env.PUBLIC_URL + `/ornamentalFabrication`}>Ornamental Fabrication<span>(20)</span></Link></li>
//                    <li><Link to={process.env.PUBLIC_URL + `/murals`}>Murals<span>(20)</span></Link></li>
//                    <li><Link to={process.env.PUBLIC_URL + `/gazebo`}>Gazebo<span>(20)</span></Link></li>
//                    <li><Link to={process.env.PUBLIC_URL + `/pathways`}>Pathways<span>(20)</span></Link></li>


//                </ul>
//            </div>
//            {/* End Sidebar Single */}

//            <ServiceButtonWidget />
//            <ServiceTagsWidget />
//            <ServiceSupportWidget />
//        </div>
//    ) : para === "Aquascapes" ? (
//        <div className="sidebar">
//            <ServiceSearchWidget />

//            {/* Start Sidebar Single */}

//            <div className="sidebar__single sidebar__category wow animated fadeInUp" data-wow-delay="0.2s">
//                <h3 className="sidebar__title">Services</h3>
//                <ul className="sidebar__category-list">
//                    <li className="active"><Link to={process.env.PUBLIC_URL + `/aquascapes`}>Aquascapes <span>(12)</span></Link></li>
//                    <li><Link to={process.env.PUBLIC_URL + `/ponds`}>Ponds<span>(15)</span></Link></li>
//                    <li><Link to={process.env.PUBLIC_URL + `/irrigationSystems`}>Irrigation Systems<span>(08)</span></Link></li>
//                    <li><Link to={process.env.PUBLIC_URL + `/fountains`}>Fountains<span>(20)</span></Link></li>
//                    <li><Link to={process.env.PUBLIC_URL + `/swimmingPools`}>Swimming Pools<span>(20)</span></Link></li>
//                    <li><Link to={process.env.PUBLIC_URL + `/waterfalls`}>Waterfalls<span>(20)</span></Link></li>
//                    <li><Link to={process.env.PUBLIC_URL + `/aquaspace`}>Aquaspace<span>(20)</span></Link></li>
//                </ul>
//            </div>
//            {/* End Sidebar Single */}

//            <ServiceButtonWidget />
//            <ServiceTagsWidget />
//            <ServiceSupportWidget />
//        </div>
//    ) : para === "Plant Library" ? (
//        <div className="sidebar">
//            <ServiceSearchWidget />

//            {/* Start Sidebar Single */}

//            <div className="sidebar__single sidebar__category wow animated fadeInUp" data-wow-delay="0.2s">
//                <h3 className="sidebar__title">Services</h3>
//                <ul className="sidebar__category-list">
//                    <li className="active"><Link to={process.env.PUBLIC_URL + `/plantLibrary`}>Plant Library <span>(12)</span></Link></li>
//                    <li><Link to={process.env.PUBLIC_URL + `/indoorNOutdoor`}>Indoor & Outdoor<span>(15)</span></Link></li>
//                    <li><Link to={process.env.PUBLIC_URL + `/succulent`}>Succulent<span>(08)</span></Link></li>
//                    <li><Link to={process.env.PUBLIC_URL + `/maintenanceNServices`}>Maintenance & Services<span>(20)</span></Link></li>
//                    <li><Link to={process.env.PUBLIC_URL + `/decorativePots`}>Decorative Pots<span>(20)</span></Link></li>
//                    <li><Link to={process.env.PUBLIC_URL + `/plantDecoration`}>PlantDecoration<span>(20)</span></Link></li>
//                    <li><Link to={process.env.PUBLIC_URL + `/plants`}>Plants<span>(20)</span></Link></li>
//                </ul>
//            </div>
//            {/* End Sidebar Single */}

//            <ServiceButtonWidget />
//            <ServiceTagsWidget />
//            <ServiceSupportWidget />
//        </div>
//    ) : (
//        <div className="sidebar">
//            <ServiceSearchWidget />

//            {/* Start Sidebar Single */}


//            {/* End Sidebar Single */}

//            <ServiceButtonWidget />
//            <ServiceTagsWidget />
//            <ServiceSupportWidget />
//        </div>)}
// </div>
{/* End Sidebar */ }
