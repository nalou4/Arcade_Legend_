import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const popup = document.getElementById("popup");

    function closePopup(){
        popup.classList.remove(".open-popup");
        console.log(popup);
    }

    function openPopup(){
        popup.classList.add(".open-popup")
        closePopup();
    }


    // Function that displays a success toast on bottom right of the page when form submission is successful
    const toastifySuccess = () => {
        toast('Form sent!', {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            className: 'submit-feedback success',
            toastId: 'notifyToast'
        });
    };

    // Function called on submit that uses emailjs to send email of valid contact form
    const onSubmit = async (data) => {
        // Destrcture data object
        const { name, email, subject, message } = data;
        try {
            const templateParams = {
                name,
                email,
                subject,
                message
            };
            await emailjs.send(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                templateParams,
                process.env.REACT_APP_USER_ID
            );
            reset();
            toastifySuccess();
        } catch (e) {
            console.log(e);
        }
    };
    return (
        <div className='ContactForm container'>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap');
            </style>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 text-center'>
                        <div className='contactForm'>
                            <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>

                                <div className='contact-row'>
                                <div className='input-group'>
                                    <input
                                        id='name'
                                        type='text'
                                        name='name'
                                        {...register('name', {
                                            required: { value: true, message: 'Please enter your name' },
                                            maxLength: {
                                                value: 30,
                                                message: 'Please use 30 characters or less'
                                            }
                                        })}
                                        className='form-control formInput'
                                    ></input>
                                    {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                                    <label for="name" ><i class="fa-solid fa-user"></i> Your name</label>
                                </div>

                                <div className='input-group'>
                                    <input
                                        id='email'
                                        type='text'
                                        name='email'
                                        {...register('email', {
                                            required: true,
                                            pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                                        })}
                                        className='form-control formInput'
                                    ></input>
                                    {errors.email && (
                                        <span className='errorMessage'>Please enter a valid email address</span>
                                    )}
                                    <label for="email" ><i class="fa-solid fa-envelope"></i> Your email</label>
                                </div>
                                </div>


                                <div className='input-group'>
                                    <input
                                        id='subject'
                                        type='text'
                                        name='subject'
                                        {...register('subject', {
                                            required: { value: true, message: 'Please enter a subject' },
                                            maxLength: {
                                                value: 75,
                                                message: 'Subject cannot exceed 75 characters'
                                            }
                                        })}
                                        className='form-control formInput'
                                    ></input>
                                    {errors.subject && (
                                        <span className='errorMessage'>{errors.subject.message}</span>
                                    )}
                                    <label for="subject" ><i class="fa-solid fa-pen"></i> Subject</label>
                                </div>


                                <div className='input-group'>
                                    <textarea
                                        id='message'
                                        rows={8}
                                        {...register('message', {
                                            required: true
                                        })}
                                        className='form-control formInput'
                                        required
                                    ></textarea>
                                    {errors.message && <span className='errorMessage'>Please enter a message</span>}
                                    <label for="message" ><i class="fa-solid fa-comment"></i> Message</label>
                                </div>

                                <button onClick={openPopup()} className='contact-btn' type='submit'>
                                    SUBMIT <i class="fa-solid fa-paper-plane"></i>
                                    <div className='popup' id='popup'>
                                        <label>Thank you for your feedback.</label>
                                    </div>
                                </button>

                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;