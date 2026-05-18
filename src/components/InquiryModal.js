import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { theme } from '../theme';

const FORMSPREE_ENDPOINT =
  process.env.REACT_APP_FORMSPREE_ENDPOINT ||
  'https://formspree.io/f/mrervkov';

const Backdrop = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(26, 26, 26, 0.45);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 6rem 1.5rem 2rem;
  z-index: 100;
  overflow-y: auto;

  @media (max-width: 640px) {
    padding: 3rem 1rem 2rem;
  }
`;

const Dialog = styled(motion.div)`
  background: ${theme.bg};
  width: 100%;
  max-width: 520px;
  padding: 2.5rem;
  border-radius: 4px;
  position: relative;

  @media (max-width: 640px) {
    padding: 2rem 1.5rem;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  color: ${theme.textMuted};
  font-size: 1.25rem;
  line-height: 1;
  padding: 0.5rem;
  cursor: pointer;
  transition: color 0.15s ease;

  &:hover {
    color: ${theme.text};
  }
`;

const Title = styled.h2`
  font-family: ${theme.serif};
  font-weight: 400;
  font-size: 1.75rem;
  letter-spacing: -0.01em;
  color: ${theme.text};
  margin: 0 0 0.5rem;
  font-variation-settings: 'opsz' 36;
`;

const Helper = styled.p`
  font-size: 0.95rem;
  color: ${theme.textMuted};
  margin: 0 0 2rem;
  line-height: 1.5;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const Label = styled.label`
  font-size: 0.8rem;
  font-weight: 500;
  color: ${theme.textMuted};
  letter-spacing: 0.02em;
`;

const baseInput = `
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 1rem;
  color: #1A1A1A;
  background: transparent;
  border: none;
  border-bottom: 1px solid #E8E6DF;
  padding: 0.5rem 0;
  width: 100%;
  outline: none;
  transition: border-color 0.15s ease;

  &:focus {
    border-bottom-color: #1F3D2E;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &::placeholder {
    color: #A8A6A0;
  }
`;

const Input = styled.input`
  ${baseInput}
`;

const TextArea = styled.textarea`
  ${baseInput}
  resize: vertical;
  min-height: 2.5rem;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
`;

const Submit = styled.button`
  align-self: flex-start;
  margin-top: 0.5rem;
  background: ${theme.accent};
  color: ${theme.bg};
  border: none;
  border-radius: 4px;
  padding: 0.85rem 1.5rem;
  font-size: 0.95rem;
  font-weight: 500;
  letter-spacing: 0.01em;
  cursor: pointer;
  transition: background 0.15s ease;

  &:hover:not(:disabled) {
    background: ${theme.accentHover};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const ErrorMsg = styled.div`
  font-size: 0.875rem;
  color: #8A2A2A;
  margin-top: -0.25rem;
`;

const SuccessWrap = styled.div`
  padding: 1rem 0;
`;

const SuccessTitle = styled.h2`
  font-family: ${theme.serif};
  font-weight: 400;
  font-size: 1.75rem;
  letter-spacing: -0.01em;
  color: ${theme.text};
  margin: 0 0 0.75rem;
  font-variation-settings: 'opsz' 36;
`;

const SuccessBody = styled.p`
  font-size: 1rem;
  line-height: 1.55;
  color: ${theme.textMuted};
  margin: 0 0 1.5rem;
`;

const ResetLink = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  color: ${theme.accent};
  font-size: 0.95rem;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initialForm = { brand: '', role: '', product: '', goal: '', email: '' };

const InquiryModal = ({ open, onClose }) => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [error, setError] = useState('');
  const dialogRef = useRef(null);
  const firstFieldRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    setTimeout(() => firstFieldRef.current?.focus(), 50);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      const t = setTimeout(() => {
        setForm(initialForm);
        setStatus('idle');
        setError('');
      }, 200);
      return () => clearTimeout(t);
    }
  }, [open]);

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!form.brand.trim() || !form.role.trim() || !form.product.trim() || !form.goal.trim()) {
      setError('Please fill in every field.');
      return;
    }
    if (!EMAIL_RE.test(form.email.trim())) {
      setError('Please enter a valid email.');
      return;
    }

    setStatus('submitting');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          brand: form.brand,
          role: form.role,
          product: form.product,
          goal: form.goal,
          email: form.email,
          _subject: `Inquiry — ${form.brand}`,
          _replyto: form.email,
        }),
      });

      if (!res.ok) throw new Error('submit failed');
      setStatus('success');
    } catch (err) {
      setStatus('idle');
      setError('Something went wrong. Please email partnerships@signalandscale.studio directly.');
    }
  };

  const sendAnother = () => {
    setForm(initialForm);
    setStatus('idle');
    setError('');
    setTimeout(() => firstFieldRef.current?.focus(), 0);
  };

  return (
    <AnimatePresence>
      {open && (
        <Backdrop
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <Dialog
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="inquiry-title"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            onMouseDown={(e) => e.stopPropagation()}
          >
            <CloseButton onClick={onClose} aria-label="Close">×</CloseButton>

            {status === 'success' ? (
              <SuccessWrap>
                <SuccessTitle>Thanks.</SuccessTitle>
                <SuccessBody>
                  We'll review your inquiry and reply within 2 business days.
                </SuccessBody>
                <ResetLink onClick={sendAnother}>Send another inquiry</ResetLink>
              </SuccessWrap>
            ) : (
              <>
                <Title id="inquiry-title">Start an inquiry</Title>
                <Helper>
                  Five fields. We review every inquiry and respond within 2
                  business days.
                </Helper>

                <Form onSubmit={handleSubmit} noValidate>
                  <Field>
                    <Label htmlFor="brand">Brand</Label>
                    <Input
                      id="brand"
                      ref={firstFieldRef}
                      type="text"
                      placeholder="Company name"
                      value={form.brand}
                      onChange={update('brand')}
                      disabled={status === 'submitting'}
                      autoComplete="organization"
                    />
                  </Field>

                  <Field>
                    <Label htmlFor="role">Role</Label>
                    <Input
                      id="role"
                      type="text"
                      placeholder="Your title"
                      value={form.role}
                      onChange={update('role')}
                      disabled={status === 'submitting'}
                      autoComplete="organization-title"
                    />
                  </Field>

                  <Field>
                    <Label htmlFor="product">Product</Label>
                    <Input
                      id="product"
                      type="text"
                      placeholder="One-line description"
                      value={form.product}
                      onChange={update('product')}
                      disabled={status === 'submitting'}
                    />
                  </Field>

                  <Field>
                    <Label htmlFor="goal">Goal</Label>
                    <TextArea
                      id="goal"
                      rows={2}
                      placeholder="Campaign objective or timeline"
                      value={form.goal}
                      onChange={update('goal')}
                      disabled={status === 'submitting'}
                    />
                  </Field>

                  <Field>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Where we should reply"
                      value={form.email}
                      onChange={update('email')}
                      disabled={status === 'submitting'}
                      autoComplete="email"
                    />
                  </Field>

                  {error && <ErrorMsg role="alert">{error}</ErrorMsg>}

                  <Submit type="submit" disabled={status === 'submitting'}>
                    {status === 'submitting' ? 'Sending…' : 'Submit inquiry'}
                  </Submit>
                </Form>
              </>
            )}
          </Dialog>
        </Backdrop>
      )}
    </AnimatePresence>
  );
};

export default InquiryModal;
