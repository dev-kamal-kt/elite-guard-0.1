<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
header(
  "Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
);

require "vendor/autoload.php";
use PHPMailer\PHPMailer\PHPMailer;

$request = $_SERVER["REQUEST_METHOD"];
if ($request === "POST") {
  $data = json_decode(file_get_contents("php://input"), true);
  /*
  Array(
    [name] => Ghs Julian
    [email] => ghsjulian@gmail.com
    [phone] => 6466434545
    [message] => hello this is a message
    [submittedAt] => 2026-03-09T06:53:47.444Z
    )
  */
  // Get all the information from the client side
  $clent_name = $data["name"];
  $client_phone = $data["phone"];
  $client_email = $data["email"];
  $client_service = $data["service"];
  $client_message = $data["message"];
  $submited_time = $data["submittedAt"];

  $mail = new PHPMailer();
  $mail->isSMTP();
  $mail->SMTPDebug = 0;
  $mail->Host = "smtp.hostinger.com";
  $mail->Port = 587;
  $mail->SMTPAuth = true;
  $mail->Username = "care@eliteguardcarcare.com";
  $mail->Password = "EliteGuard2026@";
  $mail->setFrom("care@eliteguardcarcare.com", "Elite Guard");
  $mail->addReplyTo($client_email, $clent_name);
  $mail->addAddress("care@eliteguardcarcare.com", "Server");
  $mail->Subject = "Email For - $client_service";
  $mail->isHTML(true); 
  $mail->Subject = "New Contact Request For - $client_service";
  
  $mail->Body = '
    <!DOCTYPE html>
      <html lang="en">
        <head>
           <meta charset="UTF-8">
           <meta name="viewport" content="width=device-width, initial-scale=1.0">
           <meta http-equiv="X-UA-Compatible" content="IE=edge">
           <title>New Contact Message - Elite Guard Car Care</title>
        </head>
        <body style="margin:0; padding:0; background-color:#f4f4f4; font-family:Arial,Helvetica,sans-serif;">

  <!-- Main wrapper -->
  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color:#f4f4f4; padding:20px 0;">
    <tr>
      <td align="center">

        <!-- Container (600px is safe width) -->
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px; background-color:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 4px 16px rgba(0,0,0,0.08);">

          <!-- Header / Branding -->
          <tr>
            <td style="background: linear-gradient(135deg, #165f02 0%, #1e8c03 100%); padding:40px 30px 30px; text-align:center;">
              <h1 style="margin:0; color:#ffffff; font-size:28px; font-weight:bold;">Elite Guard Car Care</h1>
              <p style="margin:8px 0 0; color:#e8f5e8; font-size:16px;">Premium Window Tinting & Protection</p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding:40px 30px 30px;">

              <h2 style="margin:0 0 20px; color:#165f02; font-size:22px; font-weight:bold;">New Contact Message Received</h2>

              <p style="margin:0 0 24px; color:#333333; font-size:16px; line-height:1.5;">
                Hello Admin,<br><br>
                You have received a new inquiry through the website contact form:
              </p>

              <!-- Details Box -->
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color:#f9fafb; border:1px solid #e2e8f0; border-radius:8px; margin:0 0 30px;">
                <tr>
                  <td style="padding:24px 28px; font-size:15px; color:#1f2937; line-height:1.6;">
                    <strong style="color:#111827;">Name:</strong> ' . htmlspecialchars($clent_name) . '<br>
                    <strong style="color:#111827;">Email:</strong> ' . htmlspecialchars($client_email) . '<br>
                    <strong style="color:#111827;">Phone:</strong> ' . htmlspecialchars($client_phone) . '<br>
                    <strong style="color:#111827;">Service:</strong> ' . htmlspecialchars($client_service) . '<br>
                    <strong style="color:#111827;">Submitted:</strong> ' . htmlspecialchars($submited_time) . '<br>
                  </td>
                </tr>
              </table>

              <!-- Message -->
              <p style="margin:0 0 12px; color:#111827; font-size:15px; font-weight:600;">Message:</p>
              <div style="background-color:#ffffff; border:1px solid #e2e8f0; border-radius:8px; padding:20px 24px; margin-bottom:30px; white-space:pre-wrap; line-height:1.55; color:#1f2937; font-size:15px;">
                ' . nl2br(htmlspecialchars($client_message)) . '
              </div>

              <p style="margin:0 0 20px; color:#4b5563; font-size:14px; line-height:1.5;">
                Please respond to this inquiry at your earliest convenience.<br>
                Reply directly to this email — the sender will be included in the thread.
              </p>

              <!-- CTA Button -->
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="margin:0 auto;">
                <tr>
                  <td style="background-color:#165f02; border-radius:8px; text-align:center;">
                    <a href="mailto:' . htmlspecialchars($client_email) . '?subject=Re%3A%20Elite%20Guard%20Car%20Care%20Inquiry" 
                       target="_blank" 
                       style="display:inline-block; padding:14px 36px; color:#ffffff; font-size:16px; font-weight:bold; text-decoration:none; background-color:#165f02; border-radius:8px;">
                      Reply to ' . htmlspecialchars($clent_name) . '
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#f8f9fa; padding:30px; text-align:center; color:#6b7280; font-size:14px; border-top:1px solid #e5e7eb;">
              <p style="margin:0 0 8px;">
                Elite Guard Car Care • Mobile Premium Tinting Services
              </p>
              <p style="margin:0 0 8px;">
                Dubai • Abu Dhabi • Al Ain
              </p>
              <p style="margin:12px 0 0; color:#9ca3af;">
                © ' . date("Y") . ' Elite Guard Car Care. All rights reserved.
              </p>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>';

  if (!$mail->send()) {
    echo json_encode([
      "code" => 403,
      "type" => "error",
      "status" => false,
      "message" => $mail->ErrorInfo,
    ]);
  } else {
    echo json_encode([
      "code" => 200,
      "type" => "success",
      "status" => true,
      "message" => "Email Has Been Sent Successfully",
    ]);
  }
} else {
  echo json_encode([
    "code" => 403,
    "type" => "error",
    "status" => false,
    "message" => "POST Request Available Only!",
  ]);
}
?>
