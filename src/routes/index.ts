import { Router }  from "express";

const router = Router();

// Mount sub-routers here, idk if this makes it organisationally easier or not.

router.get('/', (req, res) => {
  res.send('lmao hi');
});

export default router;