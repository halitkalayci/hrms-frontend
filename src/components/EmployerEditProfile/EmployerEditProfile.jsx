import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import HrmsTextInput from "../../utilities/customFormControls/HrmsTextInput";
import { Grid, Header, Image, Button, Label, Divider } from "semantic-ui-react";
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import EmployerUpdateRequestService from "../../services/employerUpdateRequestService";
import { success } from "../../store/actions/alertActions";
export default function EmployerEditProfile() {
  let employerUpdateReqService = new EmployerUpdateRequestService();
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);
  const [canSubmitNew, setcanSubmitNew] = useState(true);
  const { authState } = useSelector((state) => state.auth);

  useEffect(() => {
    employerUpdateReqService
      .canSubmitNewRequest(authState.user.userId)
      .then((response) => {
        setcanSubmitNew(response.data.success);
      })
      .catch((error) => {});
  }, []);

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (data) => {
    data = {...data , employerId: authState.user.userId}
    employerUpdateReqService
      .addNew(data,file)
      .then((response) => {
        console.log(response);
        if(response.data.success){
           dispatch(success(response.data.message));
           setcanSubmitNew(false);
        }
      })
      .catch((error) => {});
  };

  const initialValues = {
    updatedCompanyName: authState.user.companyName,
    updatedCompanyPhone: authState.user.phone,
    updatedCompanyWebsite: authState.user.website,
    updatedCompanyEmail: authState.user.user.email,
    currentPassword: "",
    newPassword: "",
    newPasswordConfirm: "",
  };

  const schema = Yup.object({
    updatedCompanyName: Yup.string().required("Firma adı zorunludur"),
    updatedCompanyPhone: Yup.string().required("Telefon numarası zorunludur"),
    updatedCompanyWebsite: Yup.string().required("Websitesi boş olamaz"),
    updatedCompanyEmail: Yup.string().required("E-posta adresi boş olamaz."),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values) => {
        handleSubmit(values);
      }}
    >
      <Form className="ui form">
        <Grid>
          {canSubmitNew ? null : (
            <Grid.Column width={12}>
              <Header as="h4" className="text-center" color="red">
                Halihazırda onay bekleyen bir güncelleme isteğiniz bulunduğundan
                yeni bir güncelleme isteğinde bulunamazsınız.
              </Header>
            </Grid.Column>
          )}
          <Grid.Column width={10}>
            <HrmsTextInput
              disabled={!canSubmitNew}
              name="updatedCompanyName"
              label="Firma Adı"
            ></HrmsTextInput>
            <HrmsTextInput
              disabled={!canSubmitNew}
              name="updatedCompanyPhone"
              label="Firma Telefonu"
            ></HrmsTextInput>
            <HrmsTextInput
              disabled={!canSubmitNew}
              name="updatedCompanyWebsite"
              label="Firma Websitesi"
            ></HrmsTextInput>
            <HrmsTextInput
              disabled={!canSubmitNew}
              name="updatedCompanyEmail"
              label="Firma E-postası"
            ></HrmsTextInput>
          </Grid.Column>
          <Grid.Column className="m-auto text-center" width={6}>
            <Header as="h3">Firma Avatarı</Header>
            {file ? (
              <Image
                className="profile-custom-img"
                src={URL.createObjectURL(file)}
                size="medium"
                circular
              />
            ) : (
              <Image
                className="profile-custom-img"
                src={authState.user.avatarPath}
                size="medium"
                circular
              />
            )}
            <input
              disabled={!canSubmitNew}
              onChange={(event) => handleChange(event)}
              className="profile-custom-btn"
              type="file"
              accept="image/jpeg"
            ></input>
          </Grid.Column>
          <Grid.Column className="m-auto" width={16}>
            <Divider />

            <div className="w-100">
              <Button color="red">Üyeliğimi Sonlandır</Button>
              <Label color="gray" pointing="left" as="h5">
                Bu işlemin geri dönüşü yoktur.
              </Label>
              <Button
                disabled={!canSubmitNew}
                className="float-right"
                color="blue"
                type="submit"
              >
                Değişiklikleri Kaydet
              </Button>
            </div>
          </Grid.Column>
        </Grid>
      </Form>
    </Formik>
  );
}
