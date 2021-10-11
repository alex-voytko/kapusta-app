import React from 'react';
import { Form, Formik, useField } from 'formik';
import * as Yup from 'yup';
import s from './AuthForm.module.scss';
import GoogleLogin from 'react-google-login';

const initialForm = { email: '', password: '' };

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email(`* E-mail адрес введен неверно!`)
        .min(4, '* Минимум 4 символа')
        .required('*это обязательное поле'),
    password: Yup.string()
        .required('*это обязательное поле')
        .min(8, '* Минимум 8 символов')
        .max(20, '* Максимум 20 символов'),
});

export const FormControl = ({ label, ...props }) => {
    const id = Math.floor(Math.random() * 99999).toString();
    const [field, meta] = useField(props);

    return (
        <div className={s}>
            <label className={s.label} htmlFor={id}>
                {label}
                <input
                    id={id}
                    className={
                        meta.error && meta.touched
                            ? `${s.inputError}`
                            : `${s.input}`
                    }
                    {...field}
                    {...props}
                />
                <div className={s.inputErrorMessage}>
                    {meta.error && meta.touched && (
                        <p className={s.inputTextMessage}>{meta.error}</p>
                    )}
                </div>
            </label>
        </div>
    );
};

function AuthForm() {
    const responseSuccessGoogle = response => {
        console.log(response);
    };

    const responseErrorGoogle = response => {
        console.log(response);
    };

    return (
        <div className={s.formContainer}>
            <Formik
                initialValues={initialForm}
                validationSchema={validationSchema}
            >
                <Form className={s.form} autoComplete="off">
                    <div className={s.googleFormContainer}>
                        <p className={s.googleFormWrapper}>
                            Вы можете авторизироваться с помощью <br />
                            Google Account:
                        </p>
                    </div>

                    <GoogleLogin
                        /* clientId="" */
                        buttonText="Google"
                        onSuccess={responseSuccessGoogle}
                        onFailure={responseErrorGoogle}
                        cookiePolicy={'single_host_origin'}
                        className={s.googleButton}
                    />

                    <div className={s.googleFormContainer}>
                        <p className={s.formWrapper}>
                            Или зайти с помощью e-mail и пароля, <br />
                            предварительно зарегистрировавшись:
                        </p>
                    </div>
                    <div className={s.formInput}>
                        <FormControl
                            label="Электронная почта:"
                            name="email"
                            type="email"
                            placeholder="your@email.com"
                        />
                        <FormControl
                            label="Пароль:"
                            type="password"
                            name="password"
                            placeholder="password"
                        />
                        <div className={s.formButtonsWrapper}>
                            <button type="submit" className={s.formButton}>
                                Войти
                            </button>

                            <button type="submit" className={s.formButton}>
                                Регистрация
                            </button>
                        </div>
                    </div>
                </Form>
            </Formik>
        </div>
    );
}

export default AuthForm;
