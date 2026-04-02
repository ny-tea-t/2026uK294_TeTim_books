import { Formik, Form, Field, ErrorMessage } from 'formik';
import AppButton from '../atoms/AppButton';

type BookFormProps = {
  initialValues: {
    title: string;
    publication_date: string;
  };
  onSubmit: (values: { title: string; publication_date: string }) => Promise<void> | void;
  submitText: string;
};

function BookForm({ initialValues, onSubmit, submitText }: BookFormProps) {
  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validate={(values) => {
        const errors: any = {};

        if (!values.title) errors.title = 'Titel ist erforderlich';
        if (!values.publication_date) errors.publication_date = 'Publication Date ist erforderlich';

        return errors;
      }}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        await onSubmit(values);
        setSubmitting(false);
        if (submitText !== 'Speichern') resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div style={{ marginBottom: '12px' }}>
            <label htmlFor="title" style={{ color: 'black' }}>Titel</label>
            <br />
            <Field id="title" name="title" style={{ width: '100%', padding: '10px', color: 'black' }} />
            <div style={{ color: 'red', marginTop: '4px' }}>
              <ErrorMessage name="title" />
            </div>
          </div>

          <div style={{ marginBottom: '12px' }}>
            <label htmlFor="publication_date" style={{ color: 'black' }}>Publication Date</label>
            <br />
            <Field id="publication_date" name="publication_date" style={{ width: '100%', padding: '10px', color: 'black' }} />
            <div style={{ color: 'red', marginTop: '4px' }}>
              <ErrorMessage name="publication_date" />
            </div>
          </div>

          <AppButton type="submit">
            {isSubmitting ? 'Speichert...' : submitText}
          </AppButton>
        </Form>
      )}
    </Formik>
  );
}

export default BookForm;