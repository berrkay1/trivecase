"use client"
import React, { useEffect, useState } from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import InputMask from 'react-input-mask';
import './style.scss';
import Button from '@/components/button';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

type ListResponseModel = {
    email: string;
    id: number;
    name: string;
    phone: string;
    username: string;
}

const AccountList = () => {

    const [list, setList] = useState<ListResponseModel[] | null>(null);
    const { t, i18n } = useTranslation();
    useEffect(() => {
        getData();
    }, [])

    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(list));
    }, [list])

    const getData = async () => {
        try {
            const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
            if (data && data.length > 0) {
                setList(data);
            }
        } catch (error) {
            alert(error)
        }
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('All fields must be completed'),
        username: Yup.string().required('All fields must be completed'),
        email: Yup.string().email('Invalid email').required('All fields must be completed'),
        phone: Yup.string().required('All fields must be completed'),
    });

    const handleSubmit = (values: any, { resetForm }: any) => {
        setList((list: any) => {
            return [...list, { ...values, id: list.length > 0 ? (list[list?.length - 1].id) + 1 : 0 }]
        })
        resetForm();
    };

    const deleteUser = (idx: number) => {
        setList(list?.filter(item => item.id != idx) as any);
    }


    return (
        <section className='account-list'>
            <div className="container">
                <div className="account-list-container">
                    <div className="form-content">
                        <div className="table-title">{t("account-list")}</div>
                        <Formik
                            initialValues={{ name: '', username: '', email: '', phone: '' }}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ errors, touched }) => (
                                <Form className='form'>
                                    <div className={'input ' + (!!errors.name ? "error-message" : "")}>
                                        <Field name="name" placeholder="Name" />
                                        {errors.name && touched.name &&
                                            <div className='error-message'>{errors.name}</div>}
                                    </div>
                                    <div className={'input ' + (!!errors.username ? "error-message" : "")}>
                                        <Field name="username" placeholder="Surname" />
                                        {errors.username && touched.username &&
                                            <div className='error-message'>{errors.username}</div>}
                                    </div>
                                    <div className={'input ' + (!!errors.email ? "error-message" : "")}>

                                        <Field name="email" type="email" placeholder="Email" />
                                        {errors.email && touched.email &&
                                            <div className='error-message'>{errors.email}</div>}
                                    </div>
                                    <div className={'input phone ' + (!!errors.phone ? "error-message" : "")}>
                                        <span className='label'>Phone</span>
                                        <Field name="phone">
                                            {({ field }:any) => (
                                                <InputMask
                                                    {...field}
                                                    mask="(999) 999 99 99"
                                                    placeholder="(5_ _) _ _ _ _ _ _"
                                                />
                                            )}
                                        </Field>
                                        {errors.phone && touched.phone &&
                                            <div className='error-message'>{errors.phone}</div>}
                                    </div>
                                    <Button text={t("add-list")} type='submit' />

                                </Form>
                            )}
                        </Formik>
                    </div>
                    <div className="account-items">
                        {list && <table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>{t("name")}</th>
                                    <th>{t("surname")}</th>
                                    <th>{t("email")}</th>
                                    <th>{t("phone")}</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>

                                {list && list?.length > 0 ?
                                    <>
                                        {
                                            list?.map((item, idx) => (
                                                <tr key={idx}>
                                                    <td>{idx + 1}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.username}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.phone}</td>
                                                    <td onClick={() => deleteUser(item.id)} className='delete'>{t("delete")}</td>
                                                </tr>
                                            ))
                                        }
                                    </> :
                                    <tr>
                                        <td className='info'>{t("no-user")}!</td>

                                    </tr>}




                            </tbody>
                        </table>}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default AccountList