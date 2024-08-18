import { eq } from "drizzle-orm";

import database from "../database/database";
import { rumbleProfiles } from "../schema";


/**
 * 
 * @param message The message string, in the form
 * <bucketheadId>,<isOculus>,<rumbleDisplayName>,<bp>
 * isOculus: The number 0 or 1.
 */

const setPlayerBp = async (message: string) => {
  // TODO: Find a better delimiter or enforce string sanitisation.
  // Don't want a comma in a display name to screw everything up.
  const [
    bucketheadId,
    isOculus,
    rumbleDisplayName,
    bpString
  ] = message.split(',');

  const bp = parseInt(bpString);

  // Check to see if this bucketheadId exists.
  const existingProfile = await database.select()
    .from(rumbleProfiles)
    .where(eq(rumbleProfiles.bucketheadId, bucketheadId));

  if (!existingProfile.length) {
    // The profile doesn't exist, create it.
    await database.insert(rumbleProfiles).values({
      bucketheadId,
      rumbleDisplayName,
      isOculus: isOculus === '1' ? true : false,
      bp
    });
  } else {
    // It does exist, update it.
    await database.update(rumbleProfiles)
      .set({
        rumbleDisplayName,
        bp
      })
      .where(eq(rumbleProfiles.bucketheadId, bucketheadId));
  }
};

export default setPlayerBp