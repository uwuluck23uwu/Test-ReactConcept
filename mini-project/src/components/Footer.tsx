import { Box, Typography, Grid, Container, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TikTokIcon from './foldericon/TikTok';
import LineIcon from '@mui/icons-material/ChatBubble';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: '100px',
        backgroundColor: (theme) => theme.palette.grey[200],
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" gutterBottom>
              เกี่ยวกับเรา
            </Typography>
            <Typography variant="body2">
              <Link href="#" color="inherit">ข้อมูลเพิ่มเติม</Link><br />
              <Link href="#" color="inherit">ที่ตั้งสาขา</Link><br />
              <Link href="#" color="inherit">ร่วมงานกับเรา</Link><br />
              <Link href="#" color="inherit">ความยั่งยืน</Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" gutterBottom>
              ช่วยเหลือ
            </Typography>
            <Typography variant="body2">
              <Link href="#" color="inherit">คำถามที่พบบ่อย</Link><br />
              <Link href="#" color="inherit">การคืนสินค้า</Link><br />
              <Link href="#" color="inherit">นโยบายความเป็นส่วนตัว</Link><br />
              <Link href="#" color="inherit">ข้อกำหนดและเงื่อนไขในการใช้งาน</Link><br />
              <Link href="#" color="inherit">การใช้บริการเว็บไซต์</Link><br />
              <Link href="#" color="inherit">การสั่งซื้อสินค้าจำนวนมาก</Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" gutterBottom>
              บัญชีผู้ใช้
            </Typography>
            <Typography variant="body2">
              <Link href="#" color="inherit">สมาชิก</Link><br />
              <Link href="#" color="inherit">ข้อมูลส่วนตัว</Link><br />
              <Link href="#" color="inherit">คูปอง</Link><br />
              <Link href="#" color="inherit">เช็คยอดคงเหลือของบัตรของขวัญ</Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" gutterBottom>
              จดหมายข่าว
            </Typography>
            <Typography variant="body2">
              <Link href="#" color="inherit">สมัครรับข่าวสาร</Link><br />
              <Link href="#" color="inherit">สิทธิพิเศษใหม่ๆ</Link><br />
              <Link href="#" color="inherit">โปรโมชั่น</Link><br />
              <Link href="#" color="inherit">กิจกรรมพิเศษ</Link><br />
              <Link href="#" color="inherit">และอื่นๆ อีกมากมาย</Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" gutterBottom>
              ติดตาม SUDA
            </Typography>
            <IconButton href="#" color="inherit"><FacebookIcon /></IconButton>
            <IconButton href="#" color="inherit"><TwitterIcon /></IconButton>
            <IconButton href="#" color="inherit"><InstagramIcon /></IconButton>
            <IconButton href="#" color="inherit"><YouTubeIcon /></IconButton>
            <IconButton href="#" color="inherit"><TikTokIcon /></IconButton>
            <IconButton href="#" color="inherit"><LineIcon /></IconButton>
          </Grid>
        </Grid>
        <Box mt={4} textAlign="center">
          <Typography variant="body2">
            English | ไทย
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
