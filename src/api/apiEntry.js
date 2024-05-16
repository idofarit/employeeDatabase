import { supabase, supabaseUrl } from "../supabase";

export const getEntrys = async () => {
  const { data, error } = await supabase.from("empManagement").select("*");
  if (error) {
    console.log(error);
    throw new Error("Cars couldn't be loaded");
  }
  return data;
};

export const createEditentry = async (newEntry, id) => {
  const hasImgPath = newEntry.empImg?.startsWith?.(supabaseUrl);

  const imgName = `${Math.random()}-${newEntry.empImg.name}`.replaceAll(
    "/",
    ""
  );

  const imgPath = hasImgPath
    ? newEntry.empImg
    : `${supabaseUrl}/storage/v1/object/public/empImg/${imgName}`;

  // create entry
  let query = supabase.from("empManagement");

  // for_create
  if (!id) query = query.insert([{ ...newEntry, empImg: imgPath }]);

  // for_edit
  if (id) query = query.update({ ...newEntry, empImg: imgPath }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.log(error);
    throw new Error("Employee slot couldn't be created");
  }

  // upload img
  if (hasImgPath) return data;

  const { error: storageError } = await supabase.storage
    .from("empImg")
    .upload(imgName, newEntry.empImg);

  if (storageError) {
    await supabase.from("empImg").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "Employee image could not be uploaded and the empImg was not created"
    );
  }

  return data;
};

export const deleteEntry = async (id) => {
  let query = supabase.from("empManagement");

  const { data, error } = await query.delete().eq("emp_id", id).select();

  if (error) {
    console.log(error);
    throw new Error("Employee entry slot couldn't be deleted");
  }

  if (data) {
    window.location.reload();
  }

  return data;
};
