# 📜 Terms Enforcer for WooCommerce

**Terms Enforcer for WooCommerce** displays a fully customizable modal requiring users to accept your Terms & Conditions before proceeding. Designed to improve legal compliance, user consent logging, and site control.

---

## 🚀 Features

| Feature                            | Free | Pro |
|------------------------------------|------|-----|
| Modal popup for Terms & Conditions | ✅   | ✅  |
| Forced scroll to accept            | ✅   | ✅  |
| Scroll-triggered "Continue" button | ✅   | ✅  |
| Editable terms text                | ✅   | ✅  |
| Terms & Privacy page linking       |      | ✅  |
| Custom styling (CSS/JS)            |      | ✅  |
| GDPR consent checkbox              |      | ✅  |
| Consent logs (with timestamp)      |      | ✅  |
| Age verification gate              |      | ✅  |
| Multi-template modal designs       |      | ✅  |
| Priority support                   |      | ✅  |

---

## 🧩 Hooks & Filters

Developers can customize nearly everything via actions and filters:

### Filters

| Filter | Purpose |
|--------|---------|
| `te_should_show_modal` | Modify when the modal should appear |
| `te_modal_logo_id` | Filter the modal logo ID |
| `te_modal_data` | Full override of modal data |
| `te_modal_style` | Modify selected modal layout |
| `te_modal_templates` | Add/remove template styles |
| `te_selected_modal_template` | Change selected modal template |
| `te_enable_gdpr_notice` | Enable/disable GDPR checkbox |
| `te_gdpr_text` | Override GDPR checkbox text |
| `te_skip_nonce_check` | Bypass nonce verification |
| `te_pre_log_gdpr` | Filter acceptance before logging |
| `te_log_user_id` | Filter user ID for logging |
| `te_log_data` | Complete override of log data |
| `te_log_table_name` | Change log database table name |

### Actions

| Action | Purpose |
|--------|---------|
| `te_before_modal_render` | Before rendering modal |
| `te_after_modal_render` | After rendering modal |
| `te_before_checkbox_render` | Before checkbox output |
| `te_after_checkbox_render` | After checkbox output |
| `te_before_log_acceptance` | Before inserting to DB |
| `te_after_log_acceptance` | After logging accepted |
| `te_log_acceptance_error` | On log failure |
| `te_after_log_insert` | After database insert |

---

## ⚙️ Admin Settings Panel

You can find the plugin’s settings under **Admin → Terms Enforcer**.

### Tabs & Features

#### 🛡 General Settings

| Option | Description | Pro |
|--------|-------------|-----|
| Enable Terms Enforcement | Toggle entire feature on/off | ✅ |
| Repeat Modal Interval | 1/7/30 days or every visit | ✅ |

#### 🎨 Design & Appearance

| Option | Description | Pro |
|--------|-------------|-----|
| Modal Style Preset | Choose a layout | ✅ |
| Custom CSS | Advanced style injection | ✅ |
| Custom JS | Run your own JavaScript | ✅ |

#### ✍️ Content & Text

| Option | Description | Pro |
|--------|-------------|-----|
| Modal Title | Custom heading | ✅ |
| Modal Logo | Image/logo for modal | ✅ |
| Terms Content | Rich text area | ✅ |
| Accept Button Text | Custom CTA text | ✅ |
| Terms Page | Link to full page | ✅ |
| Privacy Page | Privacy policy link | ✅ |
| GDPR Checkbox | Enable/Disable | ✅ |
| GDPR Text | Customize text | ✅ |

#### 🔞 Age Verification

| Option | Description | Pro |
|--------|-------------|-----|
| Enable Age Gate | Restrict based on age | ✅ |
| Minimum Age | Set age requirement | ✅ |

---

## 🧠 Developer: Template Renderer

The plugin includes a utility class to load view templates cleanly:

### Class: `TermsEnforcer\Includes\Class_call_templates`

```php
Class_call_templates::render('modal/default', [
    'title' => 'Accept Terms',
    'content' => 'Terms content...',
    'button_text' => 'Agree'
]);
```

- Templates are located in: `src/resources/views/`
- Template variables are passed as associative arrays.
- Outputs error if file is not found.

---

## 📁 Plugin File Structure

```
term-enforcer/
├── composer.json
├── composer.lock
├── readme.txt
├── src
│   ├── assets
│   │   ├── css
│   │   │   ├── admin.css
│   │   │   ├── frontend.css
│   │   │   └── modal.css
│   │   └── js
│   │       ├── admin.js
│   │       ├── frontend.js
│   │       ├── modal-handler.js
│   │       └── modal.js
│   ├── includes
│   │   ├── class_acceptance_log.php
│   │   ├── class_acceptance_logger.php
│   │   ├── class_accessibility_settings.php
│   │   ├── class_admin_logo_uploader.php
│   │   ├── class_admin_modal_layout.php
│   │   ├── class_admin_settings.php
│   │   ├── class_age_verification.php
│   │   ├── class_call_templates.php
│   │   ├── class_consent_logger.php
│   │   ├── class_init.php
│   │   ├── class_license_checker.php
│   │   ├── class_modal_builder.php
│   │   ├── class_modal_display.php
│   │   ├── class_modal_injector.php
│   │   ├── class_te_db_installer.php
│   │   ├── class_term_checkbox.php
│   │   └── class_toolbar_render.php
│   └── resources
│       └── views
│           ├── admin
│           │   ├── accessibilityAdminTemplate.php
│           │   ├── licenseskeyTemplate.php
│           │   ├── modalFooter.php
│           │   ├── modalHeading.php
│           │   ├── modalLayoutPre.php
│           │   ├── modalSidebar.php
│           │   ├── previewModal.php
│           │   └── termsLogsTemplate.php
│           └── frontend
│               ├── accessibilityTemplate.php
│               ├── ageVerification.php
│               ├── checkboxTemplate.php
│               ├── modalStyle1.php
│               ├── modalStyle2.php
│               ├── modalStyle3.php
│               ├── modalStyle4.php
│               └── popupModal.php
├── terms-enforcer.php
└── vendor
```

---

## 🔑 Activation & Dependencies

- Requires **WooCommerce**
- Automatically installs DB tables on activation
- Registers settings and enqueues assets dynamically

---

## 📈 Upgrade to Pro

Unlock premium features such as:

- Custom branding
- Age verification
- GDPR logging
- Advanced styling
- Consent log export
- Priority support

---

## 📄 License

GPLv2 or later. See `LICENSE` file for details.

---

