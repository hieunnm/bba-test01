# Lesson 01 – Setup môi trường & đẩy code lên GitHub

Buổi đầu chủ yếu là cài đồ nghề với làm quen Git/GitHub. Note lại mấy ý chính cho khỏi quên.

## Cần cài gì

- Node.js – để chạy code (Playwright chạy trên nền Node)
- Git – quản lý code
- VS Code – editor
- Extension Playwright trong VS Code – chạy/debug test ngay trong editor cho tiện

NVM = Node Version Manager, dùng để quản lý nhiều version Node, cần version nào thì switch qua. Giờ chưa cần nhiều nhưng cứ nhớ vậy.

## Config Git (làm 1 lần cho cả máy)

```bash
git config --global user.name "<tên bạn>"
git config --global user.email "<email>"
git config --global init.defaultBranch main
```

`--global` là set cho toàn máy, khỏi làm lại mỗi repo.

## SSH key để nối máy với GitHub

Ý tưởng: máy mình giữ **private key**, GitHub giữ **public key**, hai cái khớp nhau thì GitHub biết đúng là mình → push khỏi nhập token.

Tạo key:

```bash
ssh-keygen -t rsa -b 4096 -C "email@example.com"
```

- Hỏi passphrase thì **để trống** (Enter luôn) – thầy dặn.
- **Máy nào có key rồi thì thôi, không gen lại.**

Lấy public key rồi thêm lên GitHub:

```bash
cat ~/.ssh/id_rsa.pub
```

Copy chuỗi đó → vào https://github.com/settings/ssh/new → dán vào → Add. (Nhớ chỉ share file `.pub` thôi, đừng đụng file private.)

## Cài Playwright

Nên tạo 1 folder cha chứa code cả khóa cho gọn (vd `k24/` bên trong có `pw-course`, `practice-1`...). Mỗi bài 1 folder con, sau dễ tìm.

Tạo folder → mở bằng VS Code → mở terminal → chạy:

```bash
npm init playwright@latest
```

Rồi cứ Enter liên tục qua mấy câu hỏi (TypeScript, folder tests, workflow, cài browser). Thấy `Success!` / `Happy hacking!` là xong.

Sau khi cài thấy trong project có:

- `node_modules/` – thư viện
- `tests/example.spec.ts` – code test
- `playwright.config.ts` – file cấu hình

Mấy lệnh chạy test hay xài:

```bash
npx playwright test           # chạy hết
npx playwright test --ui      # mở UI mode xem cho dễ
npx playwright test example   # chạy 1 file
npx playwright codegen        # tự sinh code khi mình click tay
```

## Đẩy code lên GitHub

Tạo repo trước: https://github.com/new → điền tên → chọn Public → Create.

Làm 1 lần:

```bash
git init
git remote add origin <ssh_link>
```

Mỗi lần có thay đổi:

```bash
git add .
git commit -m "init project"
git push origin main
```

Nhớ thứ tự: init → remote add (1 lần) → xong về sau chỉ add → commit → push.

Cuối cùng: vào Settings → Collaborators của repo, add mentor vào để họ chấm bài.

## Note riêng

- Chạy `npm init playwright` nhớ đừng đứng sẵn trong folder trùng tên, không là bị lồng folder (mình dính lỗi này 1 lần).
- Nếu push mà báo lỗi liên quan `.github/workflows` + token thiếu `workflow` scope thì xóa folder `.github` đi rồi commit lại là được (bài này đâu cần CI).
