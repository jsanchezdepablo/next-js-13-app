'use client';

import { useState } from 'react';

export function LikeButton() {
  const [hasLike, setHasLike] = useState(false);

  return <button onClick={() => setHasLike(!hasLike)}>{hasLike ? '❤' : 'Dame un like!'}</button>;
}
