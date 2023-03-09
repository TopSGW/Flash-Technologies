import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  //   footer css
  Footer_main_container: {
    backgroundColor: "black",
    padding: "0px 112px",
    [theme.breakpoints.down("sm")]: {
      padding: "10px 45px",
    },
  },
  Stay_Up_to_Date: {
    fontStyle: "normal !important",
    fontWeight: "700 !important",
    fontSize: "20px !important",
    lineHeight: "28px !important",
    display: "flex !important",
    alignItems: "center !important",
    letterspacing: "-0.014em !important",
    color: "#FFFFFF !important",
    marginBottom: "6px !important",
  },
  subscribe_description: {
    fontStyle: "normal !important",
    fontWeight: "400 !important",
    fontSize: "16px !important",
    lineHeight: "24px !important",
  },
  container_Text: {
    marginBottom: "52px !important",
    marginTop: "78px !important",
  },
  container_Text2: {
    marginBottom: "52px !important",
    marginTop: "78px !important",
    display: "flex",
    alignItems: "center",
  },
  footer_h5_heading: {
    fontStyle: "normal",
    fontWeight: "700 !important",
    fontSize: "16px !important",
    lineHeight: "24px !important",
    color: "#FFFFFF",
    marginBottom: "12px !important",
  },
  footer_nav_item: {
    fontStyle: "normal !important",
    fontWeight: "400 !important",
    fontSize: "16px !important",
    lineHeight: "24px !important",
    color: "#6A6A6A !important",
    margin: "0xp 0xp 8px 0px !important",
    cursor: "pointer",
  },
  footer_nav_link: {
    marginTop: "56px !important",
    marginBottom: "56px !important",
  },
  Copyright: {
    fontStyle: "normal",
    fontWeight: "400 !important",
    fontSize: "16px !important",
    lineHeight: "24px !important",
    color: "#FFFFFF !important",
    marginTop: "32px !important",
  },
  //   end footer css

  EmptyContainer: {
    background: "#ECECEC !important",
    height: "56px !important",
  },
  logIn_main_Container: {
    padding: "0px 112px 0px 0px !important",
    background: "#ECECEC !important",
    [theme.breakpoints.down("lg")]: {
      padding: "0px 42px 0px 0px !important",
    },

    // [theme.breakpoints.down("md")]: {
    //   padding: "0px 0px 0px 0px !important",
    // },
  },
  logIn_sub_Container: {
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "center",
    },
  },

  Email_heading: {
    fontStyle: "normal !important",
    fontWeight: "500 !important",
    fontSize: "14px !important",
    lineHeight: "20px !important",
    color: " #374151 !important",
    margin: "0px 0px 4px 0px !important",
  },
  Forgot_password: {
    fontStyle: "normal !important",
    fontWeight: "400 !important",
    fontSize: "14px !important",
    lineHeight: "20px !important",
    color: "#5D5FEF !important",
    cursor: "pointer",
  },
  Checkbox_container: {
    display: "flex !important",
    justifyContent: "flex-end !important",
    maxWidth: "465px !important",
    margin: "0xp 0px 24px 0px !important",
  },
  Forgot_password_container: {
    display: "flex !important",
    justifyContent: "flex-end !important",
    maxWidth: "450px !important",
    margin: "4px 0px 24px 0px !important",
  },
  Account_Q: {
    textAlign: "center",
    fontStyle: "normal !important",
    fontWeight: "400 !important",
    fontSize: "16px !important",
    lineHeight: "24px !important",
    letterSpacing: "0.02em !important",
    color: "#000 !important",
    margin: "25px 0px 31px 0px !important",
    cursor: "pointer",
  },
  Register: {
    color: "#FCBF07",
    fontSize: "20px !important",
    fontWeight: "500 !important",
    lineHeight: "30px !important",
    letterSpacing: "2% !important",
  },
  input_box_1: {
    border: "1px solid #D1D5DB !important",
    borderRadius: "6px !important",
    padding: "0px 0px 0px 15px !important",
    display: "flex !important",
    maxWidth: "450px !important",
  },
  input_box_2: {
    border: "1px solid #D1D5DB !important",
    borderRadius: "6px !important",
    padding: "0px 0px 0px 15px !important",
    display: "flex !important",
    maxWidth: "450px !important",
  },
  login_md_6: {
    padding: "0px 8px 0px 93px !important",
    background: "white !important",
    [theme.breakpoints.down("md")]: {
      padding: "0px 47px !important",
    },
    // [theme.breakpoints.down("sm")]: {
    //   padding: "0px 0px !important",
    // },
  },
  Form_div: {
    [theme.breakpoints.down("md")]: {
      padding: "0px 24px !important",
    },
  },
  sign_image_container: {
    display: "flex",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  sub_input_box_container: {
    padding: "0px !important",
    display: "flex",
    alignItems: "center",
  },
  sign_in_divider: {
    // maxWidth: "450px !important",
    margin: "0px 0px 38px 0px !important",
  },
  Apple_logo: {
    height: "24px !important",
    width: "24px !important",
  },
  google_logo: {
    height: "32px !important",
    background: "white !important",
    borderRadius: "50px !important",
    padding: "4px 4px !important",
  },
  Wallet_logo: {
    height: "32px !important",
    background: "black !important",
    borderRadius: "50px !important",
    padding: "4px 4px !important",
  },
  //   end signIn css

  // login css

  Get_started: {
    fontStyle: "normal !important",
    fontWeight: "500 !important",
    fontSize: "18px !important",
    lineHeight: "28px !important",
    color: "#8D8D8D !important",
    margin: "0px 0px 24px 0px !important",
  },
  passowrd_instruction: {
    fontStyle: "normal !important",
    fontWeight: "400 !important",
    fontSize: "12px !important",
    lineHeight: "18px !important",
    color: "#6B7280 !important",
    maxWidth: "450px",
    marginBottom: "24px !important",
  },
  Email_input_box: {
    border: "1px solid #D1D5DB !important",
    borderRadius: "6px !important",
    padding: "0px 0px 0px 15px !important",
    display: "flex !important",
    maxWidth: "435px !important",
    marginBottom: "24px !important",
  },
  checkBox_description: {
    fontStyle: "normal !important",
    fontWeight: "400 !important",
    fontSize: "14px !important",
    lineHeight: "20px !important",
    color: "#111827 !important",
  },
  Image_up_Text: {
    fontStyle: "normal !important",
    fontWeight: "800 !important",
    fontSize: "58px !important",
    lineHeight: "72px !important",
    letterSpacing: "-0.025em !important",
    color: "#FFFFFF",
    fontFamily: "sans-serif",
    [theme.breakpoints.down("sm")]: {
      fontWeight: "700 !important",
      fontSize: "24px !important",
      lineHeight: "32px !important",
    }
  },
  logIn_main_Container2: {
    padding: "0px 90px 0px 0px !important",
    background: "#ECECEC !important",
    [theme.breakpoints.down("lg")]: {
      padding: "0px 42px 0px 0px !important",
    },

    [theme.breakpoints.down("md")]: {
      padding: "0px 0px 0px 0px !important",
    },
  },
  login_md_6_2: {
    padding: "0px 0px 0px 43px !important",
    background: "white !important",
    [theme.breakpoints.down("md")]: {
      padding: "0px 47px !important",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0px 0px !important",
    },
  },
  Create_account_h1: {
    fontStyle: "normal !important",
    fontWeight: "800 !important",
    fontSize: "38px !important",
    lineHeight: "60px !important",
    color: "#000000 !important",
    // fontFamily: "sans-serif !important",
    margin: "0px 0px 8px 0px  !important",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center !important",
      fontSize: "31px !important",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "26px !important",
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: "30px !important",
    },
  },

  // main appbar css

  main_nav_container: {
    padding: "10px 112px",
    backgroundColor: "black",
    [theme.breakpoints.down("sm")]: {
      padding: "10px 45px",
    },
  },
  sub_nav_container: {
    display: "flex",
    justifyContent: "space-between",
  },
  nav_Item_box: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  nav_items: {
    color: "#FFFFFF",
    margin: "0px 0px 0px 40px !important",
    fontStyle: "normal !important",
    fontWeight: "500 !important",
    fontSize: "16px !important",
    lineHeight: "24px !important",
    [theme.breakpoints.down("lg")]: {
      margin: "0px 0px 0px 35px !important",
    },
  },
  login_button_Box: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  login_btn: {
    color: "#FFFFFF",
    fontWeight: "500  !important",
    fontSize: "16px  !important",
    lineHeight: "24px  !important",
    marginRight: "32px !important",
  },
  // ham_burger: {
  //   color: "white",
  // },
  // end main appbar css
  FlashLogo_container: { display: "flex", alignItems: "center" },

  // PersonalDetails css start

  details_h1_container: {
    padding: "0px 0px 0px 112px !important",
    margin: "106px 0px 66px 0px !important",
    [theme.breakpoints.down("sm")]: {
      padding: "10px 45px !important",
    },
  },
  My_Detail: {
    fontStyle: "normal",
    fontWeight: "800 !important",
    fontSize: "60px !important",
    lineHeight: "72px !important",
    letterSpacing: "-0.025em !important",
    color: "#242731 !important",
    marginBottom: "4px !important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "58px !important",
    },
  },
  registration: {
    fontStyle: "normal !important",
    fontWeight: "500 !important",
    fontsize: "18px !important",
    lineHeight: "28px !important",
    color: "#FCBF07 !important",
  },
  account_pics_box: {
    padding: "0px 112px 206px !important",
    [theme.breakpoints.down("sm")]: {
      padding: "10px 45px !important",
    },
  },
  Create_Account: {
    fontStyle: "normal !important",
    fontWeight: "800 !important",
    fontSize: "48px !important",
    lineHeight: "60px !important",
    color: "#242731 !important",
    margin: "0px 0px 16px 0px !important",
  },
  Account_Description: {
    fontStyle: "normal !important",
    fontWeight: "400 !important",
    fontSize: "16px !important",
    lineHeight: "24px !important",
    color: "#575F6E !important",
    margin: "0px 0px 36px 0px !important",
  },
  Agree_With: {
    fontStyle: "normal !important",
    fontWeight: "400 !important",
    fontSize: "16px !important",
    lineHeight: "24px !important",
  },
  Terms_use: {
    fontStyle: "normal !important",
    fontWeight: "500 !important",
    fontSize: "16px !important",
    lineHeight: "24px !important",
    color: "#FCBF07 !important",
  },
  F_name: {
    fontStyle: "normal !important",
    fontWeight: "500 !important",
    fontSize: "14px !important",
    lineHeight: "20px !important",
    color: "#374151 !important",
    marginBottom: "4px !important",
  },
  Gender: {
    fontStyle: "normal !important",
    fontWeight: "600 !important",
    fontSize: "24px !important",
    lineHeight: "20px !important",
    color: "#000",
  },
  DoB: {
    fontStyle: "normal",
    fontWeight: "500 !important",
    fontSize: "14px !important",
    lineHeight: "20px !important",
    color: "#374151 !important",
    margin: "29px 0px 4px 0px !important",
  },
  // PersonalDetails css end

  // TrackMyOrder css start
  p2_container_1: {
    padding: "66px 111px 177px 111px !important",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 20px 180px !important",
      // backgroundPosition:"43% !important"
    },
  },
  track_transfer: {
    fontStyle: "normal !important",
    fontWeight: "800 !important",
    fontSize: "48px !important",
    lineHeight: "60px !important",
    TextAlign: "center !important",
    color: "#fff",
    marginBottom: "14px !important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px !important",
      lineHeight: "24px !important",
      letterSpacing: " -0.025em !important",
      marginBottom: "10px !important",
    },
  },
  track_transfer_description: {
    fontStyle: "normal !important",
    fontWeight: "400 !important",
    fontSize: "16px !important",
    lineHeight: "24px !important",
    TextAlign: "center !important",
    color: "#fff",
    marginBottom: "70px !important",
    [theme.breakpoints.down("sm")]: {
      letterSpacing: " -0.025em !important",
      fontSize: "15px !important",
      marginBottom: "20px !important",
    },
  },
  btn_tracking: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px !important",
      lineHeight: "24px !important",
    },
    [theme.breakpoints.down(361)]: {
      padding: "6px 4px !important",
    },
  },

  tracking_number_container: {
    background: "#FFFFFF !important",
    opacity: "0.9 !important",
    padding: "24px 24px 0px 24px !important",
  },
  tracking_number: {
    fontStyle: "normal !important",
    fontWeight: "500 !important",
    fontSize: "14px !important",
    lineHeight: "20px !important",
    color: "#374151",
    marginBottom: "16px !important",
  },
  warning_digits: {
    fontStyle: "normal !important",
    fontWeight: "400 !important",
    fontSize: "16px !important",
    lineHeight: "24px !important",
    color: "#C5221F",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "10px !important",
    },
  },
  continue_container: {
    display: "flex",
    justifyContent: "flex-end",
    // marginBottom:"24px"
  },
  button_conditional_container: {
    backgroundColor: "#000 !important",
    padding: "16px 16px !important",
    display: "flex",
    marginBottom: "4px !important",
    [theme.breakpoints.down("sm")]: {
      padding: "8px 8px !important",
      marginBottom: "20px !important",
    },
  },
  btn_icon_H: {
    [theme.breakpoints.down("sm")]: {
      height: "25px !important",
    },
  },
  control_btn: {
    [theme.breakpoints.down("sm")]: {
      padding: "9px !important",
      fontStyle: "normal !important",
      fontWeight: "500 !important",
      fontSize: "14px !important",
      lineHeight: "20px !important",
    },
  },
  visit_office: {
    fontStyle: "normal !important",
    fontWeight: "800 !important",
    fontSize: "48px !important",
    lineHeight: "60px !important",
    color: "#2E2B26 !important",
    textAlign: "center",
    marginBottom: "16px !important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px !important",
      lineHeight: "29px !important",
    },
  },
  visit_office_description: {
    fontStyle: "normal !important",
    fontWeight: "400 !important",
    fontSize: "18px !important",
    lineHeight: "26px !important",
    color: "#848484 !important",
    textAlign: "center",
    marginBottom: "56px !important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px !important",
      lineHeight: "24px !important",
      marginBottom: "16px !important",
    },
  },
  hide_br: {
    [theme.breakpoints.down("lg")]: {
      display: "none",
    },
  },
  p2_container_2: {
    padding: "54px 113px !important",
    backgroundColor: "#ECECEC !important",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 20px !important",
    },
  },
  // office_cards_container: {
  //   padding: "48px 48px !important",
  //   backgroundColor: "#fff !important",
  //   borderRadius: "24px !important",
  //   boxShadow: "0px 4px 25px rgba(93, 95, 239, 0.1) !important",
  // },
  country_name: {
    fontStyle: "normal !important",
    fontWeight: "600 !important",
    fontSize: "24px !important",
    lineHeight: "28px !important",
    color: "#000 !important",
    TextAlign: "center !important",
    // marginBottom: "56px !important",
    marginLeft: "12px !important",
    padding: "10px 0px !important",
  },
  city_icon_box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "24px !important",
    boxShadow: "4px 4px 50px rgba(93, 95, 239, 0.1) !important",
    marginBottom: "24px !important",
  },
  Email_text: {
    fontStyle: "normal !important",
    fontWeight: "500 !important",
    fontSize: "18px !important",
    lineHeight: "28px !important",
    color: "#6A6A6A !important",
    TextAlign: "center !important",
    marginLeft: "15px !important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px !important",
    }
  },
  email_icon_Box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "16px !important",
  },
  numbers_icon_Box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  // FAQ CSS START
  Help_center: {
    fontStyle: "normal !important",
    fontWeight: "800 !important",
    fontSize: "48px !important",
    lineHeight: "60px !important",
    TextAlign: "center !important",
    marginBottom: "14px !important",
    color: "#FFFFFF",
    [theme.breakpoints.down("sm")]: {
      fontWeight: "700 !important",
      fontSize: "24px !important",
      lineHeight: "32px !important",
      marginBottom: "10px !important",
    },
  },

  Help_center_description: {
    fontStyle: "normal !important",
    fontWeight: "400 !important",
    fontSize: "16px !important",
    lineHeight: "24px !important",
    TextAlign: "center !important",
    marginBottom: "14px !important",
    color: "#FFFFFF",
  },
  faq_container: {
    padding: "66px 151px 202px !important",
    [theme.breakpoints.down("sm")]: {
      padding: "92px 20px 50px !important",
    },
  },
  FAQ_container2: {
    padding: "0px 39px !important",
    background: "#ECECEC",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 20px !important",
      background: "#fff",
    },
  },
  f_a_Q_heading: {
    fontStyle: "normal !important",
    fontWeight: "800 !important",
    fontSize: "30px !important",
    lineHeight: "36px !important",
    marginBottom: "15px !important",
    color: "#000",
    [theme.breakpoints.down("sm")]: {
      fontWeight: "700 !important",
      fontSize: "24px !important",
      lineHeight: "32px !important",
    },
  },
  f_a_Q_description: {
    fontStyle: "normal !important",
    fontWeight: "400 !important",
    fontSize: "18px !important",
    lineHeight: "28px !important",
    color: "#6A6A6A !important",
  },
  questions_heading: {
    fontStyle: "normal !important",
    fontWeight: "500 !important",
    fontSize: "18px !important",
    lineHeight: "24px !important",
    color: "#000 !important",
    marginBottom: "8px !important",
  },
  describe_Answers: {
    fontStyle: "normal !important",
    fontWeight: "400 !important",
    fontSize: "16px !important",
    lineHeight: "24px !important",
    color: "#6A6A6A !important",
  },
  f_a_Q_container: {
    padding: "0px 0px 0px 53px !important",
    [theme.breakpoints.down("sm")]: {
      padding: "0px 0px !important",
    },
  },
  FAQ_sub_container2: {
    padding: "80px 0px !important",
    [theme.breakpoints.down("sm")]: {
      padding: "0px 0px !important",
    },
  },
  Still_have_question: {
    fontStyle: "normal",
    fontWeight: "800 !important",
    fontSize: "48px !important",
    lineHeight: "60px !important",
    TextAlign: "center",
    color: "#000000",
    marginBottom: "15px !important",
    [theme.breakpoints.down("sm")]: {
      fontWeight: "700 !important",
      fontSize: "24px !important",
      lineHeight: "32px !important",
      marginBottom: "10px !important",
    },
  },
  FAQ_container3: {
    padding: "56px 149px !important",
    backgroundColor: "#ECECEC",
    [theme.breakpoints.down("sm")]: {
      padding: "0px 20px !important",
    },
  },
  FAQ_sub_container3: {
    // padding: "80px 0px !important",
    display: "flex",
    FlexDirection: "column !important",
    justifyContent: "center",
    alignItems: "center",
  },
  Still_have_question_answers: {
    fontStyle: "normal",
    fontWeight: "400 !important",
    fontSize: "16px !important",
    lineHeight: "24px !important",
    textAlign: "center",
    color: "#6A6A6A",
  },

  // Refer friend css start
  refer_a_friend: {
    fontStyle: "normal",
    fontWeight: "800 !important",
    fontSize: "48px !important",
    lineHeight: "60px !important",
    color: "#000",
    marginBottom: "19px !important",
    [theme.breakpoints.down("sm")]: {
      fontWeight: "700 !important",
      fontSize: "24px !important",
      lineHeight: "32px !important",
      marginBottom: "10px !important",
    },
  },
  refer_remove_br: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  refer_a_friend_description: {
    fontStyle: "normal",
    fontWeight: "500 !important",
    fontSize: "18px !important",
    lineHeight: "28px !important",
    color: "#6A6A6A !important",
    marginBottom: "30px !important",
    [theme.breakpoints.down("sm")]: {
      fontWeight: "400 !important",
      fontSize: "16px !important",
      lineHeight: "24px !important",
    },
  },
  refer_friend_container1: {
    padding: "56px 106px 88px 112px !important",
    backgroundColor: "#ECECEC",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 20px !important",
      backgroundColor: "#fff",
      FlexDirection: "column !important",
    },
  },
  refer_friend_subcontainer1: {
    [theme.breakpoints.down("sm")]: {
      FlexDirection: "column-reverse !important",
    },
  },
  refer_btn_text_button_Box: {
    display: "flex",
    FlexDirection: "column !important",
    justifyContent: "flex-end",
    padding: "0px 0px 29px 0px !important",
    [theme.breakpoints.down("sm")]: {
      padding: "0px 0px !important",
    },
  },
  refer_friend_container2: {
    padding: "56px 134px 56px 112px",
    backgroundColor: "#000",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 20px !important",
    },
  },
  friend_form_box: {
    padding: "32px 32px",
    backgroundColor: "#fff",
    borderRadius: "16px",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 20px !important",
    },
  },
  Referral_Program: {
    fontStyle: "normal",
    fontWeight: "800 !important",
    fontSize: "48px !important",
    lineHeight: "60px !important",
    color: "#242731 !important",
    marginBottom: "16px !important",
    [theme.breakpoints.down("sm")]: {
      fontWeight: "700 !important",
      fontSize: "24px !important",
      lineHeight: "32px !important",
      marginBottom: "15px !important",
    },
  },
  Referral_Program_description: {
    fontStyle: "normal",
    fontWeight: "400 !important",
    fontSize: "16px !important",
    lineHeight: "24px !important",
    color: " !imp#575F6Eortant",
    marginBottom: "32px !important",
  },
  friend_inputs: {
    marginBottom: "24px !important",
  },
  friend_inputs_Email: {
    marginBottom: "36px !important",
  },
  checkbox_text: {
    fontStyle: "normal",
    fontWeight: "400 !important",
    fontSize: "16px !important",
    lineHeight: "24px !important",
    color: "#575F6 !important",
  },
  input_label_name: {
    fontStyle: "normal",
    fontWeight: "500 !important",
    fontSize: "14px !important",
    lineHeight: "20px !important",
    color: " #374151 !important",
  },
  code_heading: {
    fontStyle: "normal",
    fontWeight: "700 !important",
    fontSize: "24px !important",
    lineHeight: "32px !important",
    color: " #fff !important",
    marginBottom: "20px !important",
  },
  code_heading_description: {
    fontStyle: "normal",
    fontWeight: "500 !important",
    fontSize: "18px !important",
    lineHeight: "28px !important",
    color: " #6A6A6A !important",
  },

  // Blogs css start
  Blog_container_1: {
    padding: "56px 112px !important",
    backgroundColor: "#FFFFFF",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 20px !important",
    },
  },
  Bank_heading: {
    fontStyle: "normal",
    fontWeight: "700 !important",
    fontSize: "24px !important",
    lineHeight: "32px !important",
    color: " #000 !important",
    marginBottom: "15px !important",
  },
  Bank_heading_description: {
    fontStyle: "normal",
    fontWeight: "500 !important",
    fontSize: "18px !important",
    lineHeight: "28px !important",
    color: " #6A6A6A !important",
    marginBottom: "24px !important",
    [theme.breakpoints.down("sm")]: {
      fontWeight: "400 !important",
      fontSize: "16px !important",
      lineHeight: "24px !important",
    },
  },
  date_text: {
    fontStyle: "normal",
    fontWeight: "500 !important",
    fontSize: "18px !important",
    lineHeight: "28px !important",
    color: " #000 !important",
    marginLeft: "33px !important",
    alignSelf: "center",
  },
  btn_date_box: {
    display: "flex",
    marginBottom: "40px !important",
  },
  Blog_subcontainer_1: {
    display: "flex",
    FlexDirection: "column !important",
    justifyContent: "center",
  },
  ourBlogs: {
    fontStyle: "normal",
    fontWeight: "800 !important",
    fontSize: "48px !important",
    lineHeight: "60px !important",
    color: " #000 !important",
    textAlign: "center",
    marginBottom: "15px !important",
    [theme.breakpoints.down("sm")]: {
      fontWeight: "700 !important",
      fontSize: "24px !important",
      lineHeight: "32px !important",
    },
  },
  ourBlogs_description: {
    fontStyle: "normal",
    fontWeight: "400 !important",
    fontSize: "16px !important",
    lineHeight: "24px !important",
    color: " #6A6A6A !important",
    textAlign: "center",
    marginBottom: "56px !important",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "15px !important",
    },
  },
  Belogs_cards_box: {
    padding: "30px 32px !important",
    backgroundColor: "#fff",
    boxShadow: " 0px 20px 40px rgba(0, 0, 0, 0.2)",
    borderRadius: "5px",
    // backgroundColor: "#FFFFFF",
  },
  Blog_container_2: {
    backgroundColor: "#ECECEC",
    padding: "56px 112px !important",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 20px !important",
    },
  },
  cards_date: {
    fontStyle: "normal",
    fontWeight: "400 !important",
    fontSize: "16px !important",
    lineHeight: "24px !important",
    color: "#5D5FEF !important",
    marginBottom: "14px !important",
  },
  cards_Blogs_heading: {
    fontStyle: "normal",
    fontWeight: "700 !important",
    fontSize: "24px !important",
    lineHeight: "32px !important",
    color: "#000 !important",
    marginBottom: "5px !important",
  },
  cards_Blogs_heading_description: {
    fontStyle: "normal",
    fontWeight: "400 !important",
    fontSize: "16px !important",
    lineHeight: "24px !important",
    color: "#6A6A6A !important",
    marginBottom: "80px !important",
  },
  image_box: {
    marginBottom: "30px !important",
  },
  time_12hrs_open: {
    fontStyle: "normal",
    fontWeight: "400 !important",
    fontSize: "16px !important",
    lineHeight: "24px !important",
    color: "#6A6A6A !important",
    marginBottom: "14px !important",
  },
  send_buy_text: {
    fontStyle: "normal",
    fontWeight: "700 !important",
    fontSize: "24px !important",
    lineHeight: "32px !important",
    color: "#000 !important",
    marginBottom: "45px !important",
  },
  Andreas_Petersen: {
    fontStyle: "normal",
    fontWeight: "700 !important",
    fontSize: "14px !important",
    lineHeight: "16px !important",
    color: "#6A6A6A !important",
    marginBottom: "3px !important",
    letterSpacing: " -0.318182px !important",
  },
  blogs_writer: {
    fontStyle: "normal",
    fontWeight: "300 !important",
    fontSize: "12px !important",
    lineHeight: "14px !important",
    color: "#6A6A6A !important",
    letterSpacing: " -0.272727px !important",
  },
  Latest_belogs: {
    fontStyle: "normal",
    fontWeight: "800 !important",
    fontSize: "48px !important",
    lineHeight: "60px !important",
    color: "#000 !important",
    marginBottom: "15px !important",
    [theme.breakpoints.down("sm")]: {
      fontWeight: "700 !important",
      fontSize: "24px !important",
      lineHeight: "32px !important",
      marginBottom: "10px !important",
    },
  },
  Latest_belogs_description: {
    fontStyle: "normal",
    fontWeight: "500 !important",
    fontSize: "18px !important",
    lineHeight: "28px !important",
    color: "#6A6A6A !important",
    marginBottom: "56px !important",
    [theme.breakpoints.down("sm")]: {
      fontWeight: "400 !important",
      fontSize: "16px !important",
      lineHeight: "24px !important",
      marginBottom: "20px !important",
    },
  },
  buy_sell_crypto: {
    fontStyle: "normal",
    fontWeight: "700 !important",
    fontSize: "24px !important",
    lineHeight: "32px !important",
    color: "#000 !important",
    marginBottom: "15px !important",
    [theme.breakpoints.down("sm")]: {
      fontWeight: "500 !important",
      fontSize: "18px !important",
      lineHeight: "28px !important",
    },
  },
  latest_blog_avatar_settings: {
    height: "40px",
    width: "43px",
  },

  // Find location css start

  retail_store: {
    fontStyle: "normal",
    fontWeight: "800 !important",
    fontSize: "48px !important",
    lineHeight: "60px !important",
    color: "#fff !important",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontWeight: "700 !important",
      fontSize: "24px !important",
      lineHeight: "32px !important",
    },
  },
  retail_store_description: {
    fontStyle: "normal",
    fontWeight: "400 !important",
    fontSize: "16px !important",
    lineHeight: "24px !important",
    color: "#fff !important",
    textAlign: "center",
  },
  Find_location_container1: {
    marginTop: "10px !important",
    padding: "63px 113px 264px 113px !important",
    [theme.breakpoints.down("sm")]: {
      padding: "50px 20px !important",
      marginTop: "0px !important",
    },
  },
  Find_location_subcontainer1: {},
  Find_location_container2: {
    padding: "52px 118px 56px 106px !important",
    backgroundColor: "#ECECEC !important",
    [theme.breakpoints.down("sm")]: {
      padding: "0px 20px 10px !important",
    },
  },
  Find_location_container3: {
    padding: "52px 118px 56px 106px !important",
    backgroundColor: "#ECECEC !important",
    [theme.breakpoints.down("sm")]: {
      padding: "0px 20px 0px !important",
    },
  },
  Find_location_h2: {
    fontStyle: "normal",
    fontWeight: "800 !important",
    fontSize: "48px !important",
    lineHeight: "60px !important",
    color: "#000 !important",
    marginBottom: "20px !important",
    [theme.breakpoints.down("sm")]: {
      fontWeight: "700 !important",
      fontSize: "24px !important",
      lineHeight: "32px !important",
      marginBottom: "10px !important",
    },
  },
  France_h1: {
    fontStyle: "normal",
    fontWeight: "800 !important",
    fontSize: "60px !important",
    lineHeight: "72px !important",
    letterSpacing: -"0.025em important",
    color: "#5D5FEF !important",
    marginBottom: "56px !important",
    [theme.breakpoints.down("sm")]: {
      fontWeight: "500 !important",
      fontSize: "18px !important",
      lineHeight: "28px !important",
      marginBottom: "10px !important",
    },
  },
  Find_here: {
    fontStyle: "normal",
    fontWeight: "500 !important",
    fontSize: "14px !important",
    lineHeight: "20px !important",
    color: "#374151 !important",
  },
  Location_text: {
    fontStyle: "normal",
    fontWeight: "500 !important",
    fontSize: "18px !important",
    lineHeight: "28px !important",
    color: "#000 !important",
    marginBottom: "15px !important",
  },
  Location_text_description: {
    fontStyle: "normal",
    fontWeight: "400 !important",
    fontSize: "16px !important",
    lineHeight: "24px !important",
    color: "#6A6A6A !important",
    marginBottom: "25px !important",
  },
  container2_md_6: {
    // backgroundColor: "#fff",
  },
  address_main_box: {
    display: "flex",
  },
  address_test_Box: {
    marginLeft: "15px !important",
  },
  Agent_name: {
    fontStyle: "normal",
    fontWeight: "500 !important",
    fontSize: "18px !important",
    lineHeight: "28px !important",
    color: "#000 !important",
    marginLeft: "15px !important",
  },
  icon_name_container: {
    display: "flex",
  },
  Agent_full_name: {
    fontStyle: "normal",
    fontWeight: "400 !important",
    fontSize: "16px !important",
    lineHeight: "24px !important",
    color: "#6A6A6A !important",
  },
  section_container: {
    display: "flex",
    justifyContent: "space-between",
  },
  sub_container2_md_6: {
    padding: "15px 20px !important",
    backgroundColor: "#fff",
    [theme.breakpoints.down("sm")]: {
      padding: "15px 20px 15px 0px !important",
    },
  },
  agent_padding: {
    padding: "0px 0px 0px 55px !important",
  },
  location_btn_container: {
    display: "flex",
    // justifyContent: "space-around",
    padding: "0px 0px 0px 55px !important",

  },
  location_btn: {
    marginLeft: "20px !important",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "20px !important",
    },
  },
  hide_break_agent: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    },
  },

  // Profile css start
  camera_box: {
    height: "48px",
    width: "48px",
    position: "absolute",
    top: "81%",
    left: "90%",
    [theme.breakpoints.down("sm")]: {
      position: "none !important",
      top: "0",
      left: "0",
    }
  },
  Profile_container_1: {
    height: "383px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      position: "none !important",
      height: "113px",
      // padding: "36px 189px 27px 190px !important"
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }
  },
  Profile_container_2: {
    padding: "0px 112px !important",
    background: "#ECECEC",
    [theme.breakpoints.down("sm")]: {
      // padding: "0px 112px 0px 110px !important",
    }
  },
  Numan: {
    fontStyle: "normal",
    fontWeight: "700 !important",
    fontSize: "24px !important",
    lineHeight: "32px !important",
    color: "#000 !important",
    [theme.breakpoints.down("sm")]: {
      fontWeight: "700 !important",
      fontSize: "14px !important",
      lineHeight: "32px !important",
    }
  },
  customer_id: {
    fontStyle: "normal",
    fontWeight: "400 !important",
    fontSize: "16px !important",
    lineHeight: "24px !important",
    color: "#6A6A6A !important",
    // [theme.breakpoints.down("sm")]: {
    //   fontWeight: "400 !important",
    //   fontSize: "12px !important",
    //   lineHeight: "24px !important",
    // }
  },
  Profile_sub_container_2: {
    marginTop: "-69px",
    zIndex: "999",
    [theme.breakpoints.down("sm")]: {
      marginTop: "-8px"
    }
  },
  hide_noman_btn: {
    [theme.breakpoints.down("sm")]: {
      display: "none !important"
    }
  },
  grid_xs_12_conatiner: {
    display: "flex",
  },
  main_contianer_profile_pic: {
    width: "100% !important",
    padding: "112px 0px 0px 0px !important",
    marginLeft: "20px !important",
    [theme.breakpoints.down("sm")]: {
      padding: "0px 0px 0px 0px !important",
    }
  },
  continer_id_btn: {
    display: "flex",
    justifyContent: "space-between",
  },
  Profile_container_3: {
    padding: "50px 112px 148px !important",
    background: "#ECECEC",
    [theme.breakpoints.down("sm")]: {
      padding: "0px 0px !important",
    }
  },
  noman_pic_settings: {
    [theme.breakpoints.down("sm")]: {
      width: "60px !important",
      height: "60px !important"
    }
  },
  sub_Profile_container_3: {
    padding: "56px 103px 0px 103px !important",
    backgroundColor: "#fff",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 20px !important",
    }
  },
  p_F_name: {
    fontStyle: "normal",
    fontWeight: "500 !important",
    fontSize: "14px !important",
    lineHeight: "20px !important",
    color: "#374151 !important",
    marginBottom: "12px !important",
  },

  // FindLocationProcess2 css start

  find_location_process_2_container: {
    padding: "85px 101px 56px 122px !important",
  },
  find_location_h1: {
    fontStyle: "normal",
    fontWeight: "800 !important",
    fontSize: "48px !important",
    lineHeight: "60px !important",
    color: "#000 !important",
    marginBottom: "15px !important",
    textAlign: "center",
  },
  find_location_h1_description: {
    fontStyle: "normal",
    fontWeight: "400 !important",
    fontSize: "16px !important",
    lineHeight: "24px !important",
    color: "#9DAFBD !important",
    marginBottom: "37px !important",
    textAlign: "center",
  },
  error_name: {
    fontStyle: "normal",
    fontWeight: "400 !important",
    fontSize: "16px !important",
    lineHeight: "24px !important",
    color: "#9DAFBD !important",
  },
  error_container: {
    background: "#FFE1E1 !important",
    padding: "15px 0px !important",
    display: "flex",
    justifyContent: "center",
    boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
  },
  warning_icon: {
    verticalAlign: "bottom",
    color: "#FF0000",
    marginRight: "9px !important",
  },
  find_location_process_3_container: {
    padding: "0px 112px !important",
  },
  send_FRom: {
    fontStyle: "normal",
    fontWeight: "500 !important",
    fontSize: "14px !important",
    lineHeight: "20px !important",
    color: "#374151 !important",
    marginBottom: "4px !important",
  },
  Current_Location: {
    fontStyle: "normal",
    fontWeight: "400 !important",
    fontSize: "16px !important",
    lineHeight: "24px !important",
    color: "#5D5FEF !important",
    marginBottom: "41px !important",
  },
  try_to_do: {
    fontStyle: "normal",
    fontWeight: "800 !important",
    fontSize: "60px !important",
    lineHeight: "72px !important",
    color: "#374151 !important",
    marginBottom: "32px !important",
    textAlign: "center",
  },
  pick_up_money: {
    marginLeft: "20px !important",
  },
  find_location_process_4_container: {
    padding: "56px 112px !important",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 20px !important"
    }
  },
  Visit_us: {
    fontStyle: "normal",
    fontWeight: "800 !important",
    fontSize: "48px !important",
    lineHeight: "60px !important",
    color: "#000 !important",
    marginBottom: "15px !important",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontWeight: "800 !important",
      fontSize: "24px !important",
      lineHeight: "29px !important",
    }
  },
  Visit_us_description: {
    fontStyle: "normal",
    fontWeight: "400 !important",
    fontSize: "16px !important",
    lineHeight: "24px !important",
    color: "#9DAFBD !important",
    marginBottom: "65px !important",
    textAlign: "center",
  },
  social_media_images: {
    marginLeft: "10px !important",
  },
  find_location_process_5_container: {
    // height:"1000px",
    widht: "100%",
    backgroundRepeat: "no-repeat",
    padding: "200px 540px",
    backgroundSize: "cover",
    [theme.breakpoints.down("sm")]: {
      padding: "200px 37px",
    }
  },
  Matthews_Street: {
    fontStyle: "normal",
    fontWeight: "500 !important",
    fontSize: "18px !important",
    lineHeight: "28px !important",
    color: "#026FC2 !important",
    marginBottom: "8px !important",
    textAlign: "center",
  },
  location_btn_map_box: {
    padding: "32px 83px 25px ",
    background: "#fff",
    borderRadius: "24px",
    [theme.breakpoints.down("sm")]: {
      padding: "32px 59px ",
    }
  },

  // page not found css start
  error_404: {
    fontStyle: "normal",
    fontWeight: "600 !important",
    fontSize: "14px !important",
    lineHeight: "20px !important",
    color: "#5D5FEF !important",
    marginBottom: "8px !important",
    textAlign: "center",
  },
  Page_not_found: {
    fontStyle: "normal",
    fontWeight: "800 !important",
    fontSize: "48px !important",
    lineHeight: "60px !important",
    color: "#111827 !important",
    marginBottom: "8px !important",
    textAlign: "center",
  },
  sorray_message: {
    fontStyle: "normal",
    fontWeight: "400 !important",
    fontSize: "16px !important",
    lineHeight: "24px !important",
    color: "#6B7280 !important",
    marginBottom: "24px !important",
    textAlign: "center",
  },
  go_back_home: {
    fontStyle: "normal",
    fontWeight: "500 !important",
    fontSize: "16px !important",
    lineHeight: "24px !important",
    color: "#5D5FEF !important",
    marginBottom: "154px !important",
    textAlign: "center",
  },
  contact_support: {
    fontStyle: "normal",
    fontWeight: "500 !important",
    fontSize: "14px !important",
    lineHeight: "20px !important",
    color: "#6B7280 !important",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
  },
  page_not_found_container: {
    padding: "154px 128px 48px !important",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 20px !important",
    }
  },

  // registration page for merchant
  merchatnt_container_1: {
    padding: "42px 112px 56px !important",
    background: "#ECECEC",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 20px !important",
      background: "#fff",
    }
  },
  registration_text: {
    fontStyle: "normal",
    fontWeight: "800 !important",
    fontSize: "48px !important",
    lineHeight: "60px !important",
    color: "#000 !important",
    [theme.breakpoints.down("sm")]: {
      fontWeight: "700 !important",
      fontSize: "24px !important",
      lineHeight: "32px !important",
    }
  },
  merchatnt_container_2: {
    padding: "0px 112px 56px !important",
    background: "#ECECEC",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 20px !important",
      background: "#fff",
    }

  },
  form_grid: {
    padding: "24px 24px !important",
    backgroundColor: "#fff",
    borderRadius: "6px !important",
    [theme.breakpoints.down("sm")]: {
      padding: "0px 0px !important",
      background: "#fff",
    }
  },
  send_identity: {
    fontStyle: "normal",
    fontWeight: "400 !important",
    fontSize: "18px !important",
    lineHeight: "28px !important",
    color: "#6A6A6A !important",
  },
  Upload_documnets: {
    fontStyle: "normal",
    fontWeight: "700 !important",
    fontSize: "24px !important",
    lineHeight: "32px !important",
    color: "#374151 !important",
    [theme.breakpoints.down("sm")]: {
      fontWeight: "700 !important",
      fontSize: "12px !important",
      lineHeight: "32px !important",
    }
  },
  images_format: {
    fontStyle: "normal",
    fontWeight: "400 !important",
    fontSize: "12px !important",
    lineHeight: "16px !important",
    color: "#6B7280 !important",
    textAlign: "center",
  },
  Upoad_text: {
    fontStyle: "normal",
    fontWeight: "500 !important",
    fontSize: "14px !important",
    lineHeight: "20px !important",
    color: "#6B7280 !important",
    marginBottom: "5px  !important",
    textAlign: "center",
  },
  upload_file_contianer: {
    padding: "150px 508px !important",
    marginBottom: "50px !important",
    border: "3px dashed #6B7280",
    borderRadius: "6px",
    [theme.breakpoints.down("sm")]: {
      padding: "15px 0px !important",
    }
  },
  btn_submit_form_box: {
    display: "flex",
    justifyContent: "flex-end",
  },
  upload_icon_box: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "12px !important",
  },

  // contact us form css start

  contact_us_text: {
    fontStyle: "normal",
    fontWeight: "800 !important",
    fontSize: "48px !important",
    lineHeight: "60px !important",
    color: "#000 !important",
    marginBottom: "12px !important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px !important",
      lineHeight: "29px !important",
    }
  },
  contact_us_text_description: {
    fontStyle: "normal",
    fontWeight: "400 !important",
    fontSize: "18px !important",
    lineHeight: "24px !important",
    color: "#6B7280 !important",
    marginBottom: "32px  !important",
  },
  address_description: {
    fontStyle: "normal",
    fontWeight: "400 !important",
    fontSize: "16px !important",
    lineHeight: "24px !important",
    color: "#6B7280 !important",
    marginBottom: "24px  !important",
  },
  contact_us_container_1: {
    padding: "76px 78px !important",
    background: "#ECECEC !important",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 20px !important",
      background: "#F7FDFF !important",
    }
  },
  contact_form_container: {
    padding: "50px 50px !important",
    background: "#fff !important",
    [theme.breakpoints.down("sm")]: {
      padding: "0px 0px !important",
      background: "#F7FDFF !important",
    }
  },

  // Notification css start
  setting_text: {
    fontStyle: "normal",
    fontWeight: "800 !important",
    fontSize: "48px !important",
    lineHeight: "60px !important",
    color: "#000 !important",
    marginBottom: "27px  !important",
    [theme.breakpoints.down("sm")]: {
      fontWeight: "700 !important",
      fontSize: "24px !important",
      lineHeight: "32px !important",
    }

  },
  Manage_my_card: {
    fontStyle: "normal",
    fontWeight: "500 !important",
    fontSize: "18px !important",
    lineHeight: "28px !important",
    color: "#6A6A6A !important",
    marginBottom: "29px  !important",
    display: "flex",
  },
  cards_icon: {
    marginRight: "9px !important",
  },
  Notification_icon_text: {
    fontStyle: "normal",
    fontWeight: "500 !important",
    fontSize: "18px !important",
    lineHeight: "28px !important",
    color: "#000 !important",
    display: "flex",
  },
  sms_text: {
    fontStyle: "normal",
    fontWeight: "500 !important",
    fontSize: "18px !important",
    lineHeight: "28px !important",
    color: "#000 !important",
    display: "flex",
  },
  sms_text_description: {
    fontStyle: "normal",
    fontWeight: "400 !important",
    fontSize: "16px !important",
    lineHeight: "24px !important",
    color: "#98A9BC !important",
    display: "flex",
    marginBottom: "16px !important",
  },
  chat_icon: {
    marginRight: "22px",
  },
  notification_main_container: {
    padding: "55px 117px 148px",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 20px",
    }
  },

  // Ok page Personal verification css start
  Personal_Verification: {
    fontStyle: "normal",
    fontWeight: "800 !important",
    fontSize: "48px !important",
    lineHeight: "60px !important",
    color: "#000 !important",
    marginBottom: "56px !important",

  },
  basic_text: {
    fontStyle: "normal",
    fontWeight: "700 !important",
    fontSize: "24px !important",
    lineHeight: "32px !important",
    color: "#000 !important",
    marginBottom: "10px !important",
  },
  Personal_info: {
    fontStyle: "normal",
    fontWeight: "500 !important",
    fontSize: "18px !important",
    lineHeight: "28px !important",
    color: "#6A6A6A !important",
  },
  Personal_Verification_container: {
    padding: "42px 193px 151px 108px !important",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 20px !important",
    }
  },
  verified_btn_container: {
    marginTop: "114px !important",
  },

  // App info css start

  appinfo_container1: {
    padding: "66px 157px 261px 153px !important",

    backgroundRepeat: "no repeat",
    backgroundSize: "cover",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 20px !important",
    },
  },
  fast_transfer: {
    fontStyle: "normal",
    fontWeight: "800 !important",
    fontSize: "48px !important",
    lineHeight: "60px !important",
    color: "#fff !important",
    marginBottom: "15px !important",
    textAlign: "center",
  },
  fast_transfer_description: {
    fontStyle: "normal",
    fontWeight: "400 !important",
    fontSize: "16px !important",
    lineHeight: "24px !important",
    color: "#fff !important",
    textAlign: "center",
  },
  SendMoney: {
    fontStyle: "normal",
    fontWeight: "800 !important",
    fontSize: "48px !important",
    lineHeight: "60px !important",
    color: "#000 !important",
    marginBottom: "32px !important",
  },
  SendMoney_description: {
    fontStyle: "normal",
    fontWeight: "400 !important",
    fontSize: "20px !important",
    lineHeight: "28px !important",
    color: "#000 !important",
    marginBottom: "32px !important",
  },
  btn_playstore: {
    marginLeft: "20px",
  },
  SamsungGalaxyS8Small_s: {
    width: "213px",
  },
  SamsungGalaxyS8Big_b: {
    width: "232px",
    // width:"224px"
  },
  Our_Process: {
    fontStyle: "normal",
    fontWeight: "400 !important",
    fontSize: "16px !important",
    lineHeight: "24px !important",
    color: "#FCBF07 !important",
    marginBottom: "12px !important",
  },
  how_to_send_money: {
    fontStyle: "normal",
    fontWeight: "800 !important",
    fontSize: "48px !important",
    lineHeight: "60px !important",
    color: "#fff !important",
    marginBottom: "12px !important",
  },
  how_to_send_money_description: {
    fontStyle: "normal",
    fontWeight: "500 !important",
    fontSize: "18px !important",
    lineHeight: "28px !important",
    color: "#fff !important",
    marginBottom: "12px !important",
  },
  appinfo_container3: {
    padding: "66px 157px 261px 153px !important",
    backgroundColor: "#000",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 20px !important",
    },
  },
  app_info_cards: {
    padding: "36px 0px !important",
    backgroundColor: " #192431",
    borderRadius: "16px",
  },
  Download_text: {
    fontStyle: "normal",
    fontWeight: "700 !important",
    fontSize: "24px !important",
    lineHeight: "32px !important",
    color: "#fff !important",
    marginBottom: "3px !important",
  },
  Download_text_descrip: {
    fontStyle: "normal",
    fontWeight: "400 !important",
    fontSize: "14px !important",
    lineHeight: "24px !important",
    color: "#fff !important",
  },

  // settings page css
  setting_text_h1: {
    fontStyle: "normal",
    fontWeight: "800 !important",
    fontSize: "48px !important",
    lineHeight: "60px !important",
    color: "#000 !important",

  },
  My_Cards_h2: {
    fontStyle: "normal",
    fontWeight: "700 !important",
    fontSize: "24px !important",
    lineHeight: "32px !important",
    color: "#343C6A !important",
    marginLeft: "-23px",
  },
  Manage_my_card_2: {
    fontStyle: "normal",
    fontWeight: "500 !important",
    fontSize: "18px !important",
    lineHeight: "28px !important",
    color: "#000 !important",
    marginBottom: "15px !important",
  },
  Manage_my_card_wallet_icon: {
    verticalAlign: "middle",
  },
  settings_container_1: {
    padding: "55px 112px 32px 112px !important",
    backgroundColor: "#ECECEC",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 20px !important",
    }
  },
  settings_container_2: {
    padding: "0px 117px 32px 73px !important",
    backgroundColor: "#ECECEC",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 20px !important",
    }
  },
  settings_my_cards: {
    [theme.breakpoints.down("sm")]: {
      padding: "0px 0px !important",
      backgroundColor: "#F7FDFF !important",
    }
  },
  settings_cards_main_box: {
    padding: "30px 34px 27px !important",
    borderRadius: "16px !important",
    backgroundColor: "#fff",
  },
  Visa_text: {
    fontStyle: "normal",
    fontWeight: "400 !important",
    fontSize: "11px !important",
    lineHeight: "13px !important",
    color: "#718EBF !important",
  },
  visa_chip_container: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "44px !important",
  },
  CARD_HOLDER: {
    fontStyle: "normal",
    fontWeight: "400 !important",
    fontSize: "10px !important",
    lineHeight: "12px !important",
    color: "#718EBF !important",
    marginBottom: "3px !important",
  },
  Eddy_Cusuma: {
    fontStyle: "normal",
    fontWeight: "600 !important",
    fontSize: "13px !important",
    lineHeight: "16px !important",
    color: "#343C6A !important",
  },
  number_settings: {
    fontStyle: "normal",
    fontWeight: "600 !important",
    fontSize: "15px !important",
    lineHeight: "18px !important",
    color: "#343C6A !important",
    // marginBottom: "3px !important",
  },
  status_checking_Container: {
    display: "flex",
    justifyContent: "space-between",
  },

  // patment method css start
  Choose_Card: {
    fontStyle: "normal",
    fontWeight: "800 !important",
    fontSize: "48px !important",
    lineHeight: "60px !important",
    color: "#000 !important",
    marginBottom: "8px !important",
  },
  Choose_Card_description: {
    fontStyle: "normal",
    fontWeight: "400 !important",
    fontSize: "16px !important",
    lineHeight: "24px !important",
    color: "#9DAFBD !important",
    marginBottom: "31px !important",
  },
  paymentmethod_container_1: {
    padding: "56px 115px 385px 112px",
    backgroundColor: "#ECECEC",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 20px !important",
    }
  },
  paymethod_btn: {
    marginLeft: "8px !important",
  },

  // addNew Page css start
  add_new_f_name: {
    fontStyle: "normal",
    fontWeight: "500 !important",
    fontSize: "14px !important",
    lineHeight: "20px !important",
    color: "#374151 !important",
    marginBottom: "4px !important",
  },

  // new css of log in page
  login_page_main_container: {
    padding: "42px 104px 209px 0px",
    backgroundColor: "#ECECEC",
    [theme.breakpoints.down("lg")]: {
      padding: "0px 0px 0px 0px",
    },
    [theme.breakpoints.down("md")]: {
      padding: "0px 0px 0px 0px",
    },
  },
  SignIn_heading: {
    fontStyle: "normal !important",
    fontWeight: "800 !important",
    fontSize: "48px !important",
    lineHeight: "60px !important",
    color: "#000000 !important",
    margin: "0px 0px 48px 0px  !important",
    // [theme.breakpoints.down("sm")]: {
    //   textAlign: "center !important",
    // },
  },
  grid_form_container: {
    padding: "0px 8px 0px 93px",
    backgroundColor: "#fff",
    [theme.breakpoints.down("lg")]: {
      padding: "0px 8px 0px 30px",
    },
    [theme.breakpoints.down("md")]: {
      padding: "50px 50px",
    },

    [theme.breakpoints.down("sm")]: {
      padding: "20px 20px",
    },
  },
  remember_meText: {
    fontStyle: "normal !important",
    fontWeight: "400 !important",
    fontSize: "14px !important",
    lineHeight: "20px !important",
    color: "#111827 !important",
  },

  // new sign upp css start
  sign_up_main_container: {
    padding: "42px 108px 100px 0px",
    backgroundColor: "#ECECEC",
    [theme.breakpoints.down("md")]: {
      padding: "0px 0px",
    }
  },
  grid_container_md_7: {
    padding: "364px 86px 237px 82px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "100%",
    height: "914px",
    [theme.breakpoints.down("lg")]: {
      height: "auto",
      padding: "50px 50px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "50px 50px",
      backgroundPosition: "0% 35%"
    },


  },
  sign_up_grid_5_box: {
    padding: "0px 3px 0px 94px",
    backgroundColor: "#fff",
    [theme.breakpoints.down("md")]: {
      padding: "50px 50px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "20px 20px",
    }
  },
  // -----------------------About-Page css started here

  About_container: {
    backgroundColor: "#F7FDFF",
  },


  Top_title: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "30px !important",
      fontSize: "20px !important",
      lineHeight: "24px !important",
    },
    marginTop: "230px !important",
    fontFamily: "Inter !important",
    fontSize: "60px !important",
    fontWeight: "800 !important",
    lineHeight: "72px !important",
    letterSpacing: "-0.025em !important",
    color: "#2E2B26",
  },
  Wonder_Txt: {
    display: "flex",
    flexDirection: "column",
  },

  Wonder_Title: {
    fontFamily: "Inter !important",
    fontSize: "18px !important",
    fontWeight: "700 !important",
    lineHeight: "24px !important",
  },

  Wonder_sub: {
    fontFamily: "Inter !important",
    fontSize: "16px !important",
    fontWeight: "400 !important",
    lineHeight: "24px !important",
    color: "#6B7280",
  },
  card_container: {
    padding: "30px 10px",
    borderRadius: "24px",
    backgroundColor: "#fff",
  },
  Feature_title: {
    fontSize: "18px !important",
    fontWeight: "700 !important",
    lineHeight: "24px !important",
  },
  feature_sub: {
    fontSize: "16px !important",
    fontWeight: "400 !important",
    lineHeight: "24px !important",
    color: "#6B7280",
  },
  man_tms: {
    fontSize: "48px !important",
    fontWeight: "800 !important",
    lineHeight: "60px !important",
    textAlign: "center",
    color: "#2E2B26",
  },
  team_Des: {
    fontSize: "18px !important",
    fontWeight: "400 !important",
    lineHeight: "26px !important",
    textAlign: "center",
    color: "#848484",
  },
  teamcard_Cont: {
    boxShadow: "4px 4px 25px rgba(57, 47, 220, 0.16) ",
    borderRadius: "24px !important",
    [theme.breakpoints.down("sm")]: {
      padding: "25px 0px !important",
    },
    height: "359px !important",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  Cont_name: {
    fontSize: "24px !important",
    fontWeight: "600 !important",
    lineHeight: "28px !important",
    textAlign: "center",
    color: "#000000",
  },
  Emaail: {
    fontSize: "18px !important",
    fontWeight: "500 !important",
    lineHeight: "28px !important",
    textAlign: "center",
    color: "#6A6A6A",
  },
  visit_Card: {
    padding: "20px 30px !important",
    background: "#FFFFF",
    boxShadow: "0px 4px 25px rgba(93, 95, 239, 0.1)",
    borderRadius: "24px !important",
  },
  visit_card_container: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "end",
    padding: "10px !important",
  },
  contry_N: {
    backgroundColor: "#FFFF",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "end",
    width: "296px",
    borderRadius: "24px",
    boxShadow: "4px 4px 50px rgba(93, 95, 239, 0.1)",
  },
  //------------------------ History css
  inputTitle: {
    padding: "5px",
    marginTop: "3px !important",
    fontSize: "12px !important",
    fontWeight: "500 !important",
    lineHeight: "15px !important",
    color: "#6A6A6A",
    textTransform: "uppercase",
  },
  tableheader: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px !important",
      lineHeight: "32px !important",
    },
    fontSize: "18px !important",
    fontWeight: "500 !important",
    lineHeight: "28px !important",
    color: "#6A6A6A",
  },
  Date: {
    fontSize: "24px !important",
    fontWeight: "700 !important",
    lineHeight: "32px !important",
  },
  month: {
    fontSize: "16px !important",
    fontWeight: "400 !important",
    lineHeight: "24px !important",
    color: "#6A6A6A",
  },
  bank: {
    fontSize: "18px !important",
    fontWeight: "500 !important",
    lineHeight: "28px !important",
  },
  money: {
    fontSize: "16px !important",
    fontWeight: "400 !important",
    lineHeight: "24px !important",
    color: "#98A9BC",
  },
  //------------- Privacy Policy css

  titlecontainer: {
    display: "flex",
    justifyContent: "center",

  },
  privacyhead: {
    marginTop: "66px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px !important",
      lineHeight: "32px !important",
    },
    fontSize: "48px !important",
    fontWeight: "800 !important",
    lineHeight: "60px !important",
    textAlign: "center",
    color: "#FFFFFF",
  },
  privacysub: {
    marginTop: "66px",
    [theme.breakpoints.down("sm")]: {
      padding: "0px 10px",
    },
    padding: "0px 400px",
    fontSize: "16px !important",
    fontWeight: "400 !important",
    lineHeight: "24px !important",
    textAlign: "center",
    color: "#fff",
  },
  francehead: {
    marginTop: "66px",
    fontSize: "24px !important",
    fontWeight: "700 !important",
    lineHeight: "32px !important",
    padding: "10px 0px",
  },

  francepara: {
    fontFamily: "Inter !important",
    padding: "10px 0px",
    fontSize: "18px !important",
    fontWeight: "400 !important",
    lineHeight: "24px !important",
    color: "#6A6A6A",
  },
  paragraphs: {
    fontFamily: "Inter !important",
    fontSize: "18px !important",
    fontWeight: "400 !important",
    lineHeight: "28px !important",
    color: "#6A6A6A",
  },
  Related: {
    marginTop: "66px",
    fontSize: "24px !important",
    fontWeight: "700 !important",
    lineHeight: "32px !important",
    padding: "10px 0px",
    borderBottom: "1px solid #000",
  },
  relatedLink: {
    color: "#5D5FEF",
    textDecoration: "none",
    padding: "10px 0px 10px 0px",
    fontSize: "18px !important",
    fontWeight: "400 !important",
    lineHeight: "28px !important",
  },

  //------------------Privacy Policy css end

  //---------------------- CurrencyUpdate css start
  Lupdate: {
    fontFamily: "Roboto !important",
    fontSize: "18px !important",
    fontWeight: "400 !important",
    lineHeight: "21.09px !important",
  },

  //---------------------- CurrencyUpdate css end
  //---------------------- paymentdone css start
  Prices: {
    margin: "7px 0px 7px 0px !important",
    fontFamily: "Inter !important",
    fontSize: "18px !important",
    fontWeight: "500 !important",
    lineHeight: "28px !important",
  },
  transaction: {
    margin: "7px 0px 7px 0px !important",
    fontFamily: "Inter !important",
    fontSize: "18px !important",
    fontWeight: "500 !important",
    lineHeight: "28px !important",
    color: "#6A6A6A",
  },
  transaction_Link: {
    margin: "7px 0px 7px 0px !important",
    fontFamily: "Inter !important",
    fontSize: "18px !important",
    fontWeight: "500 !important",
    lineHeight: "28px !important",
    color: "#5D5FEF",
  },
  Review: {
    [theme.breakpoints.down("sm")]: {

      fontSize: "24px !important",
      fontWeight: "700 !important",
      lineHeight: "32px !important",
    },
    fontFamily: "Inter !important",
    fontSize: "48px !important",
    fontWeight: "800 !important",
    lineHeight: "60px !important",
  },
  map_txt: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px !important",
      fontWeight: "700 !important",
      lineHeight: "19.36px !important",
    },
    fontFamily: "Inter !important",
    fontSize: "48px !important",
    fontWeight: "800 !important",
    lineHeight: "60px !important",
  },
  Receiver: {
    fontFamily: "Inter !important",
    fontSize: "24px !important",
    fontWeight: "700 !important",
    lineHeight: "32px !important",
  },
  Review_para: {
    fontFamily: "Inter !important",
    fontSize: "16px !important",
    fontWeight: "400 !important",
    lineHeight: "24px !important",
    color: "#9DAFBD",
  },


  sender: {
    fontFamily: "Inter !important",
    fontSize: "24px !important",
    fontWeight: "700 !important",
    lineHeight: "32px !important",
  },
  sender_para: {
    fontFamily: "Inter !important",
    fontSize: "16px !important",
    fontWeight: "400 !important",
    lineHeight: "24px !important",
    color: "#6A6A6A",
  },

  country_txt: {
    fontFamily: "Inter !important",
    fontSize: "14px !important",
    fontWeight: "500 !important",
    lineHeight: "20px !important",
  },
  country_para: {
    fontFamily: "Inter !important",
    fontSize: "14px !important",
    fontWeight: "500 !important",
    lineHeight: "20px !important",
    color: "#6B7280",
  },

  //---------------------- reviews css end
  //---------------------- addnew css start

  qa: {
    fontFamily: "Inter !important",
    fontSize: "24px !important",
    fontWeight: "700 !important",
    lineHeight: "32px !important"

  },
  //---------------------- addnew css end
  //---------------------- Bpayment css start

  insts_Txt: {
    fontFamily: "Inter !important",
    fontSize: "14px !important",
    fontWeight: "500 !important",
    lineHeight: "20px !important",
    color: "#6A6A6A",
  },
  note: {
    fontFamily: "Inter !important",
    fontSize: "16px !important",
    fontWeight: "400 !important",
    lineHeight: "24px !important",
    color: "#9DAFBD",
  },
  //---------------------- Bpayment css end

  overlapIcon: {
    position: 'absolute',
    bottom: '-140px',
    left: '5%',
  },
  overlapIcon2: {
    position: 'absolute',
    bottom: '-80px',
    left: '20%',
  },
  usps: {
    fontFamily: 'Manrope !important',
    fontSize: '16px !important',
    fontWeight: '400 !important',
    lineHeight: '22px !important',
    letterSpacing: '0em !important',
    backgroundRepeat: 'no-repeat',
    paddingBottom: '30px',
    [theme.breakpoints.down("sm")]: {
      fontFamily: 'Manrope !important',
    fontSize: '12px !important',
    fontWeight: '400 !important',
    lineHeight: '17.4px !important',
    // letterSpacing: '0em !important',
    },

  },
  flashBoxesLine: {
    margin: '0 auto',
    marginTop: '70px',
    marginBottom: '10px',
    display: 'block',
    [theme.breakpoints.down("sm")]: {
      margin: '0 auto',
      marginTop: '38px',
      marginBottom: '8px',
      display: 'block'
    },

  },
  flashBoxes: {
    background: '#181818',
    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
    padding: '30px',
    borderRadius: '30px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    
  },
  flashBoxesPara: {
    fontFamily: 'Manrope !important',
    fontWeight: '400 !important',
    fontSize: '16px !important',
    opacity: '0.7',
    [theme.breakpoints.down("sm")]: {
      fontFamily: 'Manrope !important',
      fontSize: "12px !important",
      fontWeight: "400 !important",
      lineHeight: "19.2px !important",
    },
  },
  flashBoxesAnchor: {
    color: '#FBBF04 !important',
    fontFamily: 'Manrope !important',
    fontWeight: '400 !important',
    fontSize: '20px !important',
    textDecoration: 'none !important',
    [theme.breakpoints.down("sm")]: {
      fontFamily: 'Manrope !important',
      fontSize: "12px !important",
      fontWeight: "400 !important",
      lineHeight: "19.2px !important",
    },

  },
  flashBoxesImage: {
    maxWidth: '100%',
    marginTop: '20px',
    [theme.breakpoints.down("sm")]: {
      marginTop: "17px"
    },

  },
  flashBoxesImage1: {
    width: '100%',
    // [theme.breakpoints.down("sm")]: {
    //   maxWidth: '50%',
    // marginTop: '20px',
    // width: '100px',
    // marginBottom: '0px',
    // },
  },
  tokenomicsbullets: {

  },
  blurTransferComponent: {
    // filter: 'blur(10px)'
  }

}))
